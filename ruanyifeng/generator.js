function* gen(x){
  var y = yield x+2;
  return y;
}
var g = gen(1);
// console.log(g.next()) // 3
// console.log(g.next()) // undefined

// console.log(g.next())  // 3
// console.log(g.next(5)) // 5

// console.log(g.next(8))  // 3
// console.log(g.next()) // undefined

// console.log(g.next(8))  // 3
// console.log(g.next(5)) // 5
// console.log(g.next(9)) // undefined

// console.log(g.next(8))  // 3
// console.log(g.next(5)) // 5
// console.log(g.next(9)) // undefined
// console.log(g.next(11)) // undefined
// console.log(g.next(90)) // undefined

function* gen1(){
  yield new Promise((resolve, reject)=>{
    setTimeout(function(){
      console.log('gen1 called1')
      resolve()
    }, 3000)
  })
  yield new Promise((resolve, reject)=>{
    setTimeout(function(){
      console.log('gen1 called2')
      resolve()
    }, 3000)
  })
}

// var g1 = gen1();
// g1.next().value.then(()=>{
//   g1.next().value.then(()=>{})
// })

// autorun 自动运行generator，串行运行
// function autorun(genFn){
//   var genFnIns = genFn();
//   function next(data){
//     var res = genFnIns.next(data);
//     if(res.done) return res.value;
//     return res.value.then(next)
//   }
//   next()
// }
// autorun(gen1)

// 并行运行所有的generator
Promise.all(gen1())

