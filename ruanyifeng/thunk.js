// Thunk 函数的含义和用法
// http://www.ruanyifeng.com/blog/2015/05/thunk.html
// 立即求值
// var x = 1;
// function f(m){
//   return m * 2;     
// }
// f(x + 5)
// // 传值调用时，等同于
// f(6)

// // 惰性求值, 只有在真正执行的时候才去求值
// f(x + 5)
// // 传名调用时，等同于
// (x + 5) * 2

// // 编译器的"传名调用"实现，往往是将参数放到一个临时函数之中，再将这个临时函数传入函数体。这个临时函数就叫做 Thunk 函数
// f(x+5)
// // 等同于
// function thunk(x){
//   return x+5
// }
// function f(thunk){
//   return thunk()*2
// }

function f1(x,y,z, callback){
  var count = x+y+z;
  callback(count);
  return count;
}
function fnThunk(fn){
  return function(){
    return fn.apply(this, arguments);
  }
}
var f1Thunk = fnThunk(f1);
var f1Temp = 5;
console.log(f1Thunk(f1Temp+1,f1Temp+3,f1Temp+5, function(c){
  console.log("callback log", c)
}))