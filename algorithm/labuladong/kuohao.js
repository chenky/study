/**
 * 括号匹配相关内容，这种难题特别适合使用栈
 * https://mp.weixin.qq.com/s/plxWQsTgW6LW3T7yBAXjQg
*/
// 给定{[]()}判断是否合法
function isValid(str) {
    const len = str.length
    const left = []
    const map = { '}': '{', ']': '[', ')': '(' }
    for (let i = 0; i < str.length; i++) {
        const element = str[i]
        if (['{', '[', '('].includes(element)) {
            left.push(element)
        }
        if (['}', ']', ')'].includes(element)) {
            const need = map[element]
            if (left.length > 0 && left[left.length - 1] === need) {
                left.pop()
            } else {
                return false
            }
        }
    }
    return left.length === 0
}

// 字符串中只有()一种括号，且一个左括号对应两个有括号，问最少几次插入可以让括号合法
function minInsertions(str) {
    let res = 0, needRight = 0
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (char === '(') {
            needRight += 2
            if (needRight % 2 === 1) {
                // 说明需要再插入一个右括号，才能正好匹配左括号，因为一个左括号配两个右括号
                res++
                // 此时右括号要减一
                needRight--
            }
        }

        if (char === ')') {
            needRight--
            if (needRight === -1) {
                // 右括号多了一个，需要插入一个左括号
                res++
                // 插入一个左括号，配两个右括号，所以-1 -> 1
                needRight = 1
            }
        }
    }
    return res + needRight
}
// 第二种写法
function minInsertions2(str) {
    let needRight = 0
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (char === '(') {
            needRight += 2
        }

        if (char === ')') {
            needRight--
        }
    }
    if (needRight === 0) {
        return 0
    } else if (needRight > 0) {
        return needRight
    } else {
        needRight = Math.abs(needRight)
        const remainder = needRight % 2
        const matchLeft = Math.floor(needRight >> 1)
        if (remainder == 0) {
            return matchLeft
        } else {
            // 如果余数为1，则肯定需要左右括号各插入一个，才能完全匹配
            return matchLeft + 2
        }
    }
}
console.log(minInsertions('()('), minInsertions('())'), minInsertions('()(('), minInsertions('()))))))'), 'should be 3 0 5 4')
console.log(minInsertions2('()('), minInsertions2('())'), minInsertions2('()(('), minInsertions2('()))))))'), 'should be 3 0 5 4')