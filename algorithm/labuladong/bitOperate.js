/**
 * 判断汉明权重
*/
function hanmingWeight(n) {
    let res = 0
    while (n !== 0) {
        n = n & (n - 1)
        res++
    }
    return res
}

// 判断是否是2的指数
function isPower2(n) {
    if (n <= 0) return false
    return n & (n - 1) === 0
}

// 查找只出现一次的数
// 一个数和它本身做异或运算结果为 0，即 a ^ a = 0；一个数和 0 做异或运算的结果为它本身，即 a ^ 0 = a。
function singleNumber(nums) {
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i]
        res ^= element
    }
    return res
}