function merge(nums) {
    // 辅助数组，避免反复开辟内存空间
    const temp = []
    function _sort(nums, lo, hi) {
        // 单个元素不用排序
        if (lo === hi) {
            return
        }
        const mid = parseInt(lo + (hi - lo) / 2)
        _sort(nums, lo, mid)
        _sort(nums, mid + 1, hi)
        _merge(nums, lo, mid, hi)
    }
    function _merge(nums, lo, mid, hi) {
        for (let i = lo; i <= hi; i++) {
            temp[i] = nums[i]
        }
        console.log(lo, mid, hi, temp)
        let i = lo, j = mid + 1
        for (let p = lo; p <= hi; p++) {
            if (i === mid + 1) {
                nums[p] = temp[j++]
            } else if (j === hi + 1) {
                nums[p] = temp[i++]
            } else if (temp[i] > temp[j]) {
                nums[p] = temp[j++]
            } else {
                nums[p] = temp[i++]
            }
        }
    }
    _sort(nums, 0, nums.length - 1)
    return nums
}

console.log(merge([3, 2, 4, 1, 5]))