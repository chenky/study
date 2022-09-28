function _shuffle(nums) {
    for (let i = 0; i < nums.length; i++) {
        const r = Math.ceil(Math.random() * i);
        [nums[i], nums[r]] = [nums[r], nums[i]]
    }
    return nums
}

function _partition(nums, lo, hi) {
    const pivot = nums[lo]
    // 关于区间的边界控制需格外小心，稍有不慎就会出错
    // 我这里把 i, j 定义为开区间，同时定义：
    // [lo, i) <= pivot；(j, hi] > pivot
    // 之后都要正确维护这个边界区间的定义
    let i = lo + 1, j = hi
    // 当 i > j 时结束循环，以保证区间 [lo, hi] 都被覆盖
    while (i <= j) {
        while (i < hi && nums[i] <= pivot) {
            i++
            // 此 while 结束时恰好 nums[i] > pivot
        }
        while (j > lo && nums[j] > pivot) {
            j--
            // 此 while 结束时恰好 nums[j] <= pivot
        }
        if (i >= j) {
            break
        }
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    // 将 pivot 放到合适的位置，即 pivot 左边元素较小，右边元素较大
    [nums[lo], nums[j]] = [nums[j], nums[lo]]
    return j
}

function _sort(nums, lo, hi) {
    if (lo >= hi) return
    // 对 nums[lo..hi] 进行切分
    // 使得 nums[lo..p-1] <= nums[p] < nums[p+1..hi]
    const p = _partition(nums, lo, hi)
    _sort(nums, lo, p - 1)
    _sort(nums, p + 1, hi)
}

// 快速排序
function quickSort(nums) {
    nums = _shuffle(nums)
    _sort(nums, 0, nums.length - 1)
    return nums
}

// 查找第k大的元素，时间复杂度n，如果用优先队列即二叉堆则时间复杂度为nlogk，如果完整排序则为nlogn
function findKthLargest(nums, k) {
    nums = _shuffle(nums)
    const len = nums.length
    let lo = 0, hi = len - 1
    k = len - k
    while (lo <= hi) {
        const p = _partition(nums, lo, hi)
        if (p < k) {
            lo = p + 1
        } else if (p > k) {
            hi = p - 1
        } else {
            return nums[p]
        }
    }
    return -1
}

// 快速排序，一个函数搞定
function quickSort2(nums, left, right) {
    if (left > right) {
        return
    }
    console.log('quickSort2')
    // const randomIndex = getRandomIntInclusive(left, right);
    const randomIndex = left
    // console.log(left, right, randomIndex);
    const pivot = nums[randomIndex]
    let i = left,
        j = right

    while (i < j) {
        // 先从右往左找
        while (nums[j] >= pivot && i < j) {
            j--
        }
        // 从左往右
        while (nums[i] <= pivot && i < j) {
            i++
        }
        if (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }

    [nums[i], nums[randomIndex]] = [nums[randomIndex], nums[i]]
    quickSort2(nums, left, i - 1)
    quickSort2(nums, i + 1, right)

    // if (
    //   (i > randomIndex && nums[i] < nums[randomIndex]) ||
    //   (i < randomIndex && nums[i] > nums[randomIndex])
    // ) {
    //   [nums[i], nums[randomIndex]] = [nums[randomIndex], nums[i]];
    //   quickSort2(nums, left, i - 1);
    //   quickSort2(nums, i + 1, right);
    // } else {
    //   quickSort2(nums, left, randomIndex - 1);
    //   quickSort2(nums, randomIndex + 1, right);
    // }
}

console.log(quickSort([3, 2, 1, 5, 4]), findKthLargest([3, 2, 1, 5, 4], 4))
const nums2 = [3, 2, 1, 5, 4, 10, 7, 9, 6, 0, 22, 40, 19, 17, 14, 23]
quickSort2(nums2, 0, nums2.length - 1)
console.log(nums2)