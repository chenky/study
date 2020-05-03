function factorial(n){
  if(n===1) return 1;
  return n*factorial(n-1);
}
// 做到这一点的方法，就是把所有用到的内部变量改写成函数的参数
// 正常模式下，函数内部有两个变量，可以跟踪函数的调用栈。
// arguments：返回调用时函数的参数, func.caller：返回调用当前函数的那个函数
// 尾调用优化发生时，函数的调用栈会改写，因此上面两个变量就会失真。严格模式禁用这两个变量，所以尾调用模式仅在严格模式下生效
function factorialTailCallOpt(n, total){
  if(n===1) return total;
  return factorialTailCallOpt(n-1, n*total);
}