function shuffle(arr) {
    const n = arr.length
    // 0-i之间取随机数，与i进行交换
    for (let i = 0; i < n; i++) {
        const r = Math.random() * i
        // const j = r.toFixed();
        const j = Math.ceil(r);
        // 使用解构方式交换元素，前面一句一定要有分号，否则报错
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}
// console.log(shuffle([1, 2, 3, 4, 5, 6, 7]))

/**
 * arr: 原始数组
 * k：随机取k个元素
 * canDuplicate: arr中的元素是否可以被重复取两次+
*/
function getRand(arr = [], k = arr.length, canDuplicate = false) {
    let res = []
    const n = arr.length
    if (canDuplicate) {
        for (let i = 0; i < k; i++) {
            const r = Math.floor(Math.random() * n)
            res.push(arr[r])
        }
    } else {
        for (let i = 0; i < n; i++) {
            // 取0-i之间的随机数
            const r = Math.ceil(Math.random() * i);
            // 使用解构方式交换元素，前面一句一定要有分号，否则报错
            [arr[i], arr[r]] = [arr[r], arr[i]]
        }
        res = arr.slice(0, k)
    }
    return res
}
console.log(getRand(
    [1, 2, 3, 4, 5, 6, 7]), getRand([1, 2, 3, 4, 5, 6, 7], 3),
    getRand([1, 2, 3, 4, 5, 6, 7], 3), getRand([1, 2, 3, 4, 5, 6, 7], 3, true),
    getRand([1, 2, 3, 4, 5, 6, 7], 3, true)
)
