/**
 * 单调栈，下一个更大的数字
 * 给你一个数组，返回一个等长的数组，对应索引存储着下一个更大元素，如果没有更大的元素，就存 -1。
 * 比如说，输入一个数组nums = [2,1,2,4,3]，你返回数组[4,2,4,-1,-1]。
 * 解释：第一个 2 后面比 2 大的数是 4; 1 后面比 1 大的数是 2；第二个 2 后面比 2 大的数是 4; 
 * 4 后面没有比 4 大的数，填 -1；3 后面没有比 3 大的数，填 -1。
 * 
*/
function nextGreaterNum(nums) {
    const res = []
    const stack = []
    // 从后往前遍历
    for (let i = nums.length - 1; i >= 0; i--) {
        const num = nums[i]
        while (stack.length > 0 && stack[stack.length - 1] <= num) {
            // 小的全部起开
            stack.pop()
        }
        res[i] = stack.length > 0 ? stack[stack.length - 1] : -1
        stack.push(num)
    }
    return res
}
// nums = [2,1,2,4,3]，你返回数组[4,2,4,-1,-1]。
// console.log(nextGreaterNum([2, 1, 2, 4, 3]))

/**
 * 给你一个数组T，这个数组存放的是近几天的天气气温，你返回一个等长的数组，
 * 计算：对于每一天，你还要至少等多少天才能等到一个更暖和的气温；如果等不到那一天，填 0。
 * 比如说给你输入T = [73,74,75,71,69,76]，你返回[1,1,3,2,1,0]。
 * 解释：第一天 73 华氏度，第二天 74 华氏度，比 73 大，所以对于第一天，只要等一天就能等到一个更暖和的气温，后面的同理。
*/
function nextWarnDays(nums) {
    const res = []
    const stack = []
    for (let i = nums.length - 1; i >= 0; i--) {
        const num = nums[i]
        while (stack.length > 0 && nums[stack[stack.length - 1]] <= num) {
            stack.pop()
        }
        res[i] = stack.length > 0 ? stack[stack.length - 1] - i : 0
        stack.push(i)
    }
    return res
}
// console.log(nextWarnDays([73, 74, 75, 71, 69, 76]))

/**
 * 比如输入一个数组[2,1,2,4,3]，你返回数组[4,2,4,-1,4]。
 * 拥有了环形属性，最后一个元素 3 绕了一圈后找到了比自己大的元素 4。
 * 这个问题肯定还是要用单调栈的解题模板，但难点在于，比如输入是[2,1,2,4,3]，
 * 对于最后一个元素 3，如何找到元素 4 作为 Next Greater Number。
 * 我们可以不用构造新数组，而是利用循环数组的技巧来模拟数组长度翻倍的效果。取模的方式构建循环数组
*/
function nextGreaterNum2(nums) {
    const len = nums.length
    const res = []
    const stack = []
    for (let i = len * 2 - 1; i >= 0; i--) {
        const num = nums[i % len]
        while (stack.length > 0 && stack[stack.length - 1] <= num) {
            stack.pop()
        }
        res[i % len] = stack.length > 0 ? stack[stack.length - 1] : -1
        stack.push(num)
    }
    return res
}
// [2,1,2,4,3] [4,2,4,-1,4]
console.log(nextGreaterNum2([2, 1, 2, 4, 3]))