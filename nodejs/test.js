function testArgs(first, ...rest) {
    console.log("first is ", first, "rest is ", rest)
}
// testArgs(1, 2, 3, 4)
// setTimeout(() => { console.log(7) }, 0)
// console.log(1)
// const p = new Promise((resolve, reject) => {
//     console.log(2)
//     resolve()
//     console.log(3)
// })
// Promise.resolve().then(() => console.log(5))
// p.then(() => console.log(4))
// console.log(6)

const arr = [1, 2, 3, 4, 5]
arr.forEach(item => {
    // Promise.resolve().then(() => console.log(item))
    setTimeout(() => {
        console.log(item, "setTimeout")
    }, 0)
})
