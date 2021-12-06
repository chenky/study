/**
 * 一维数组前缀和
*/
class NumArray {
    #arr
    #preSum

    constructor (arr) {
        this.#arr = arr
        this.#preSum = [arr[0]]
        this.#arr.forEach((val, index) => {
            if (index > 0) {
                this.#preSum[index] = this.#preSum[index - 1] + val
            }
        })
        // console.log(this.#preSum)
    }

    // 索引从0开始
    sumRang(left, right) {
        if (left < 0 || right > this.#arr.length - 1) {
            throw new RangeError("左右范围超出索引范围")
        }
        return left === 0 ? this.#preSum[right] : this.#preSum[right] - this.#preSum[left - 1]
    }
}

// const inst = new NumArray([2, 0, -1, 4, 5, 8])
// console.log(inst, inst.arr, inst.preSum)
// console.log(inst.sumRang(1, 2))
// console.log(inst.sumRang(3, 5))

/**
 * 和为k的连续子数组
*/
function subArraySum(nums, k) {
    const _map = new Map()
    const len = nums.length
    let res = 0, sum0_right = 0
    for (let index = 0; index < len; index++) {
        const num = nums[index]
        // 0-right 的和
        sum0_right += num
        // 0-right 区间中和为sum0_right-k的和， 即left-right的和为k
        const sum0_left = sum0_right - k
        console.log(_map, sum0_right, sum0_left)
        if (_map.has(sum0_left)) {
            res += _map.get(sum0_left)
        }
        _map.set(sum0_right, (_map.get(sum0_right) ?? 0) + 1)
    }
    return res
}

// console.log(subArraySum([3, 5, 2, -2, 4, 1], 5))
// console.log(subArraySum([3, 5, 2, -2, 4, 1], -2))
// console.log(subArraySum([3, 5, 2, -2, 4, 1], 1))
// console.log(subArraySum([3, 5, 2, -2, 4, 1], 3))
console.log(subArraySum([3, 5, 2, -2, 4, 1], 0))