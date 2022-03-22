function nSum(nums, n, target) {
    const sortNums = nums.sort()
    // console.log(sortNums)
    function _sum(nums, n, start, target) {

        const res = []
        const len = nums.length
        if (n < 2 || len < n) return res

        if (n === 2) {
            let lo = start, hi = len - 1
            while (lo < hi) {
                const left = nums[lo], right = nums[hi]
                const s = left + right
                if (s < target) {
                    // 去重
                    while (lo < hi && left === nums[lo]) lo++
                } else if (s > target) {
                    // 去重
                    while (lo < hi && right === nums[hi]) hi--
                } else {
                    res.push([left, right])
                    // 去重
                    while (lo < hi && left === nums[lo]) lo++
                    while (lo < hi && right === nums[hi]) hi--
                }
            }
        } else {
            for (let i = start; i < len; i++) {
                const subs = _sum(nums, n - 1, i + 1, target - nums[i])
                subs.forEach((sub) => {
                    sub.push(nums[i])
                    res.push(sub)
                })
                // 去重
                while (i < len && nums[i] === nums[i + 1]) {
                    i++
                }
            }
        }
        return res

    }
    return _sum(sortNums, n, 0, target)
}

console.log(nSum([1, 0, -1, 0, -2, 2], 4, 0))