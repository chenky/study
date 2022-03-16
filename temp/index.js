function sum(nums) {
    let _sum = 0
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index]
        _sum += element
    }
    return _sum
}

function sum2(nums, _sum) {
    if (nums.length < 1) return _sum
    const lastNum = nums.pop()
    return sum2(nums, _sum + lastNum)
}

console.log(sum2([1, 2, 3, 4, 5], 0))