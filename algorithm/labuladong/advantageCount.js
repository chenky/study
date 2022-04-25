/**
 * 田忌赛马
 * https://mp.weixin.qq.com/s/Rxx3BGxRLe_FZHqNS2ILsg
*/
function advantageCount(num1, num2) {
    const num2ObjArr = num2.map((num, index) => ({ num, index })).sort((a, b) => a.num - b.num)
    num1 = num1.sort((a, b) => a - b)
    // console.log(num1, num2ObjArr)
    const res = []
    const len = num1.length
    let left = 0, right = len - 1
    for (let i = num1.length - 1; i >= 0; i--) {
        const { num, index } = num2ObjArr[i]
        // console.log(index, left, right, num1[left], num1[right], num)
        // 跑的过就上
        if (num1[right] > num) {
            res[index] = num1[right]
            right--
        } else {
            // 跑不过就取最小的上
            res[index] = num1[left]
            left++
        }
    }
    return res
}
console.log(advantageCount([12, 24, 8, 32], [13, 25, 32, 11]))