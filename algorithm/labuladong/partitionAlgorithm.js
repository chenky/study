/**
 * 利用分治算法求解问题
 * https://mp.weixin.qq.com/s/fcCJFk89w953gXDjnlZFIA
*/

// 排序就是经典的分支算法
function sort(nums, lo, hi) {
    const mid = lo + (hi - lo) / 2
    sort(nums, lo, mid)
    sort(nums, mid + 1, hi)
    mergeSort(nums, lo, mid, hi)
}

// 给定一个含有数字和运算符的字符串，添加括号，求解所有可能的结果
function diffWay2Compute(input) {
    const map = new Map()

    return _(input)

    function _(input) {

        if (map.has(input)) {
            return map.get(input)
        }

        const len = input.length
        const res = []
        for (let i = 0; i < len; i++) {
            const char = input[i]
            if (['+', '-', '*'].includes(char)) {
                const left = _(input.substring(0, i))
                const right = _(input.substring(i + 1))
                // console.log(`left is ${left}, right is ${right}`)
                left.forEach(lElem => {
                    right.forEach(rElem => {
                        // if (char === '+') {
                        //     res.push(lElem + rElem)
                        // } else if (char === '-') {
                        //     res.push(lElem - rElem)
                        // } else if (char === '*') {
                        //     res.push(lElem * rElem)
                        // }
                        res.push(eval(lElem + char + rElem))
                    })
                })
            }
        }

        if (res.length === 0) {
            res.push(parseInt(input))
        }

        map.set(input, res)

        return res
    }

}

console.log(diffWay2Compute('2*3-4*5'))