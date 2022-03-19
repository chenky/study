// 子集问题
function subset(nums) {
    const track = []
    const res = []
    function backtrack(nums, start) {
        // 前序
        res.push([...track])

        for (let index = start; index < nums.length; index++) {
            const num = nums[index]
            track.push(num)
            backtrack(nums, index + 1)
            track.pop()
        }
    }
    backtrack(nums, 0)
    return res
}
// console.log(subset([1, 2, 3]))

// 大小为[1,2...n]不重复的元素，求k个元素的组合数
function combine(n, k) {
    const track = []
    const res = []
    function backtrack(start, n, k) {
        if (track.length === k) {
            res.push([...track])
            return
        }
        for (let i = start; i <= n; i++) {
            track.push(i)
            backtrack(i + 1, n, k)
            track.pop()
        }
    }
    backtrack(1, n, k)
    return res
}
// console.log(combine(4, 2))

function permute(nums) {
    const track = []
    const res = []
    const visited = []

    function backtrack(nums) {
        if (nums.length === track.length) {
            res.push([...track])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            const element = nums[i]
            if (visited[i]) {
                continue
            }
            track.push(element)
            visited[i] = true
            backtrack(nums)
            track.pop()
            visited[i] = false
        }
    }
    backtrack(nums)
    return res
}
// console.log(permute([1, 2, 3]))

function subsetSumIsTarget(nums, target) {
    const track = []
    const res = []
    let sum = 0
    const numsSort = nums.sort((a, b) => a - b)
    function backtrack(nums, start, target) {
        if (sum === target) {
            res.push([...track])
            return
        }
        if (sum > target) {
            return
        }
        for (let i = start; i < nums.length; i++) {
            const element = nums[i]
            if (i > start && element === nums[i - 1]) {
                continue
            }
            track.push(element)
            sum += element
            backtrack(nums, i + 1, target)
            track.pop()
            sum -= element
        }
    }
    backtrack(numsSort, 0, target)
    return res
}

// console.log(subsetSumIsTarget([1, 9, 5, 2, 3, 4, 1, 2, 1, 2, 7], 6))

function subsetSumIsTargetCanRepeat(nums, target) {
    const track = []
    const res = []
    let sum = 0

    function backtrack(nums, start, target) {
        if (target === sum) {
            res.push([...track])
            return
        }
        if (sum > target) {
            return
        }
        for (let i = start; i < nums.length; i++) {
            const element = nums[i]
            track.push(element)
            sum += element
            backtrack(nums, i, target)
            track.pop()
            sum -= element
        }
    }
    backtrack(nums, 0, target)
    return res
}

console.log(subsetSumIsTargetCanRepeat([1, 2, 3], 3))