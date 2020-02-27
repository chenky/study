// function memorization
// function memo(fn){
//   const cache = {};
//   return (...args)=>{
//     const flag = args.join("-")
//     if(cache[flag]){
//       return cache[flag];
//     }
//     console.log(`function called and the argments is ${flag}`);
//     return cache[flag] = fn.apply(this, args);
//   }
// }
// function add(...arg){
//   return arg.reduce((total, current)=>{
//     return total+=current;
//   })
// }
// const memoFn = memo(add);
// console.log(memoFn(1,2,3));
// console.log(memoFn(1,2,3));
// console.log(memoFn(1,2,3));
// console.log(memoFn(1,2,3,4));

// Function.prototype.memoized = function (...args){
//   const key = JSON.stringify(args);
//   this._cache = this._cache || {};
//   this._cache[key] = this._cache[key] || this.apply(this,args);
//   return this._cache[key];
// }
// function add(...arg){
//   return arg.reduce((total, current)=>{
//     return total+=current;
//   })
// }
// console.log(add.memoized(1,2,3));
// console.log(add.memoized(1,2,3));
// console.log(memoFn(1,2,3));
// console.log(memoFn(1,2,3,4));


// recursion and optimization
// 正常递归
function factorial(n){
  if(n<=1) return 1;
  return n*factorial(n-1);
}
console.log(factorial(5));
// 尾调用优化
function factorialTOC(n, total=1){
  if(n===1) return total;
  return factorialTOC(n-1, n*total);
}
console.log(factorialTOC(5));
// 展开成循环
function factorialFor(n){
  let total=1;
  for (let index = 1; index <= n; index++) {
    total*=index;    
  }
  return total;
}
console.log(factorialFor(5));

// 生成器实现递归
function* TreeTraversal(node){
  yield node.value;
  if(node.hasChild()){
    for (const child of node.child) {
      yield* TreeTraversal(child);
    }
  }
}


// thunk trampolining

