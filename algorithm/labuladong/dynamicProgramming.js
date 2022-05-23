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
// console.log(miniHp([[0, 0, 0], [0, -200, 10], [0, 0, -5]]))

/**
 * https://mp.weixin.qq.com/s/D-iahj0gSs1UnDv_6KsNWQ
 * 旅行最短花费 
 * [[0,1,100],[1,2,100],[0,2,500]]
 * */
function cheapestPrice(flights, src, dist, k) {
    const cityLens = flights.length
    const memo = Array(cityLens).fill(-888).map(() => {
        return Array(k).fill(-888)
    })

    const indegree = new Map()
    flights.forEach(flight => {
        const [from, to, price] = flight
        const oldVal = indegree.get(to) ?? []
        indegree.set(to, [...oldVal, { from, price }])
    })

    return _dp(dist, k - 1)

    function _dp(dist, k) {

        if (dist === src) {
            return 0
        }
        if (k < 0) {
            return -1
        }
        if (memo[dist][k] !== -888) {
            return memo[dist][k]
        }
        // console.log(dist, k, cityLens)
        let res = Number.MAX_SAFE_INTEGER
        // dist must be in flights
        if (indegree.has(dist)) {
            const adjs = indegree.get(dist)
            adjs.forEach(adj => {
                const { from, price } = adj
                const subProblem = _dp(from, k - 1)
                if (subProblem !== -1) {
                    res = Math.min(subProblem + price, res)
                }
            })
        }

        memo[dist][k] = res === Number.MAX_SAFE_INTEGER ? -1 : res
        // console.log(JSON.stringify(memo, null, 2))
        return memo[dist][k]
    }
}
// console.log(cheapestPrice([[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 2))

function isMatch(str, partern) {
    const m = str.length, n = partern.length
    const memo = new Map()
    return _dp(str, 0, partern, 0)
    function _dp(str, i, partern, j) {
        if (j === n) {
            return i === m
        }
        if (i === m) {
            // 如果能匹配空串，一定是字符和 * 成对儿出现， 所以一定剩余偶数个
            if ((n - j) % 2 === 1) {
                return false
            }
            while (j + 1 < n) {
                if (partern[j + 1] !== '*') {
                    return false
                }
                j += 2
            }
            return true
        }
        const key = `${i}_${j}`
        if (memo.has(key)) {
            return memo.get(key)
        }
        let res = false
        // 匹配
        if (str[i] === partern[j] || partern[j] === '.') {
            if (j < n - 1 && partern[j + 1] === '*') {
                // 有*可以匹配0次或者多次
                res = _dp(str, i, partern, j + 2) || _dp(str, i + 1, partern, j)
            } else {
                // 没有*，乖乖一个个对比
                res = _dp(str, i + 1, partern, j + 1)
            }
        } else {
            // 不匹配
            if (j < n - 1 && partern[j + 1] === '*') {
                // 不匹配的情况下，有*匹配0次
                res = _dp(str, i, partern, j + 2)
            } else {
                // 没有*，乖乖一个个对比
                res = false
            }

        }
        memo.set(key, res)
        return memo.get(key)
    }
}
// console.log(isMatch('abcd', 'aba*cd'), isMatch('abaaac', 'aba*c'), isMatch('abc', 'abc'), isMatch('abacc', 'a.dcc'))
function maxCoins(nums) {
    const n = nums.length
    const points = Array(n + 2).map((item, index) => {
        return [0, n + 1].includes(index) ? 1 : nums[index - 1]
    })
    const dp = Array(n + 2).fill(0)
    for (let i = n; i >= 0; i--) {
        for (let j = i + 1; j < n + 2; j++) {
            for (let k = i + 1; k < j; k++) {
                dp[i][j] = Math.max(
                    dp[i][j],
                    dp[i][k] + dp[k][j] + points[i] * points[k] * points[j]
                )
            }
        }

    }
    return dp[0][n + 1]
}

// leetcode 115 https://mp.weixin.qq.com/s/6vwNBr48D36n6E3EawFUqg
// 给你输入一个字符串s和一个字符串t，请你计算在s的子序列中t出现的次数。比如题目给的例子，输入s = "babgbag", t = "bag"，算法返回 5：
function numDistinct(s, t) {
    const m = s.length, n = t.length
    const memo = Array(m).fill(Array(n).fill(-1))
    console.log(memo)

    function _(s, i, t, j) {
        if (j === n - 1) {
            return 1
        }
        // s[i...] 长度小于t[j...]， 那肯定不可能匹配
        if (m - i - 1 < n - j - 1) {
            return 0
        }
        if (memo[i][j] !== -1) return memo[i][j]
        let res = 0
        if (s[i] === t[j]) {
            // _(s, i+1, t, j)是为了匹配 s: aab   t: ab, 要匹配a_b, _ab这两种情况
            res += _(s, i + 1, t, j + 1) + _(s, i + 1, t, j)
        } else {
            res += _(s, i + 1, t, j)
        }
        memo[i][j] = res
        return res
    }
    return _(s, 0, t, 0)
}
console.log('numDistinct', numDistinct('babgbag', 'bag'))
