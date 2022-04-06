/**
 * 经典背包问题
*/
function dp(nums, target) {
    const len = nums.length
    const cache = Array(len).fill(0)
    cache[0] = 1
    // console.log('before ', JSON.stringify(cache))
    for (let i = 1; i <= len; i++) {
        const preNum = nums[i - 1]
        for (let j = target; j >= 0; j--) {
            // console.log(`j is ${j}, preNum is ${preNum}, cache[j] is ${cache[j]}, cache[j - preNum] is ${cache[j - preNum]}`)
            if (j >= preNum) {
                cache[j] = cache[j] + cache[j - preNum]
            } else {
                cache[j] = cache[j]
            }
        }
    }
    // console.log('after ', JSON.stringify(cache))
    return cache[target]
}
// console.log(dp([1, 1, 1, 1, 1], 4))
// console.log(dp([1, 4, 2, 3, 5, 2], 5))

// https://mp.weixin.qq.com/s/ZhPEchewfc03xWv9VP3msg
// 最长公共增长子序列
// 定义：计算 s1[i..] 和 s2[j..] 的最长公共子序列长度
// int dp(String s1, int i, String s2, int j)
// 自顶向下，递归的方式
function longestCommonSubsequence(s1, s2) {
    const memo = Array(s1.length).fill(0).map(item => Array(s2.length).fill(-1))
    return _dp(s1, 0, s2, 0)
    function _dp(s1, i, s2, j) {
        // s1,s2从结尾开始，他们肯定没有公共子序列
        if (s1.length === i || s2.length === j) {
            return 0
        }
        if (memo[i][j] !== -1) {
            return memo[i][j]
        }
        if (s1[i] === s2[j]) {
            memo[i][j] = _dp(s1, i + 1, s2, j + 1) + 1
        } else {
            memo[i][j] = Math.max(
                _dp(s1, i + 1, s2, j),
                _dp(s1, i, s2, j + 1)
            )
        }
        return memo[i][j]
    }
}
// console.log(longestCommonSubsequence('abcde', 'bde'))
// console.log(longestCommonSubsequence('abcde', 'zad'))

function longestCommonSubsequence2(s1, s2) {

    return _dp(s1, s2)
    function _dp(s1, s2) {
        const len1 = s1.length
        const len2 = s2.length
        // memo[i][j]定义成从0-i,j的最长公共子序列
        // 函数定义的原因需要占位符
        // base case memo[0][...]=0 memo[...][0]=0
        const memo = Array(len1 + 1).fill(0).map(() => Array(len2 + 1).fill(0))

        for (let i = 1; i <= len1; i++) {
            for (let j = 1; j <= len2; j++) {
                if (s1[i - 1] === s2[j - 1]) {
                    memo[i][j] = memo[i - 1][j - 1] + 1
                } else {
                    memo[i][j] = Math.max(
                        memo[i - 1][j],
                        memo[i][j - 1]
                    )
                }
            }
        }
        console.log(memo)
        return memo[len1][len2]
    }
}
// console.log(longestCommonSubsequence2('abcde', 'bde'))
// console.log(longestCommonSubsequence2('abcde', 'zad'))

// 经典背包问题，
function knapsack(w, n, wt, vals) {
    // base case memo[0][...] memo[...][0]=0
    const memo = Array(n + 1).fill(0).map(() => Array(w + 1).fill(0))
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= w; j++) {
            if (j - wt[i - 1] < 0) {
                memo[i][j] = memo[i - 1][j]
            } else {
                memo[i][j] = Math.max(
                    memo[i - 1][j],
                    memo[i - 1][j - wt[i - 1]] + vals[i - 1]
                )
            }
        }
    }
    return memo[n][w]
}
// console.log(knapsack(4, 3, [2, 1, 3], [4, 2, 3]))

// 魔塔问题
// https://mp.weixin.qq.com/s/MydL7eyzdfJc6jYZNwFWWw

function miniHp(grid) {
    const rows = grid.length, cols = grid[0].length
    const memo = Array(rows).fill(-2).map(() => Array(cols).fill(-2))
    return _dp(grid, 0, 0)
    function _dp(grid, i, j) {
        if (i === rows - 1 && j === cols - 1) {
            return grid[i][j] >= 0 ? 1 : 1 - grid[i][j]
        }
        if (i === rows || j === cols) {
            return Number.MAX_SAFE_INTEGER
        }
        if (memo[i][j] !== -2) {
            return memo[i][j]
        }
        const res = Math.min(
            _dp(grid, i, j + 1),
            _dp(grid, i + 1, j)
        ) - grid[i][j]
        memo[i][j] = res <= 0 ? 1 : res
        return memo[i][j]
    }
}
console.log(miniHp([[0, 0, 0], [0, -200, 10], [0, 0, -5]]))
