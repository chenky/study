/**
 * 实现计算器
 * https://mp.weixin.qq.com/s/ds0guq9gPTLIHLEQnFxZVQ
*/
function calculate(s) {
    function helper(str) {

        const stack = []
        let num = 0
        let lastSign = "+"

        // console.log(`str is ${str}`)
        while (str.length > 0) {
            const char = str[0]
            str = str.slice(1)
            let res = 0
            if (/\d/.test(char)) {
                num = num * 10 + parseInt(char)
            }
            if (char === '(') {
                res = helper(str)
            }
            if (/\D/.test(char) || str.length === 0) {
                // console.log(`char is ${char}`)
                let pre
                switch (lastSign) {
                    case '+':
                        stack.push(num)
                        break
                    case '-':
                        stack.push(-num)
                        break
                    case '*':
                        pre = stack.pop()
                        stack.push(pre * num)
                        break
                    case '/':
                        pre = stack.pop()
                        stack.push(Math.floor(pre / num))
                        break
                    default:
                        break
                }
                num = 0
                lastSign = char
            }
            if (char === ')') {
                break
            }
        }

        let sum = 0
        stack.forEach(item => {
            sum += item
        })
        console.log(`stack is ${stack}, sum is ${sum}`)
        return sum

    }

    // 清除所有空格
    return helper(s.replace(/\s+/g, ""))
}
console.log(`${calculate('3 * (2-6 /(3 -7))')} === 9`)
// console.log(`${calculate('3 * (2-6 /(3 -7))')} === 9 , ${calculate('3*(4-5/2)-6')} === 0`)
