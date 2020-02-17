// function curryFn(fn){
//   const fnLen = fn.length;
//   return function createCurryFactory(...params){
//     return function curry(...args){
//       const concatArgs = params.concat(args);
//       // console.log(concatArgs, concatArgs.length, fnLen);
//       if(concatArgs.length >= fnLen){
//         return fn(...concatArgs);
//       }
//       return createCurryFactory(...concatArgs);
//     }
//   }
// }

/*
http://www.ruanyifeng.com/blog/2015/04/tail-call.html
尾调用的概念非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。
尾递归的实现，往往需要改写递归函数，确保最后一步只调用自身。做到这一点的方法，就是把所有用到的内部变量改写成函数的参数。
*/
function tailCallOptimize(fn) {
  let value;
  let active = false;
  const accumulated = [];
  return function accumulator() {
    accumulated.push(arguments);
    if (!active) {
      active = true;
      while (accumulated.length) {
        value = fn.apply(this, accumulated.shift());
      }
      active = false;
      return value;
    }
  };
}

function test1(a,b,c){
  return a+b+c;
}
// console.log(test1.length);

// const test1Curry = curryFn(test1);
const test1Curry = tailCallOptimize(test1);
console.log(test1Curry(1)(2)(3));