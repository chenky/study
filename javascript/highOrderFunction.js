// function as argments
// function fnAsArgment(a,b,cb){
//   // do something then callback cb function
//   let log='';
//   if(a>b){
//     log="a is greater than b"
//   } else {
//     log = "a is less than or equal to b"
//   }
//   cb(log);
// }
// fnAsArgment(1,2, (log)=>console.log(log));
// fnAsArgment(3,2, (log)=>console.log(log));


// function as return
// return a new function, and you can enhance the original fucntion
// function wrap(cb){
//   return function(...arg){
//     // before excute the cb, you can do something
//     console.log(`${cb.name} will be excuted`);
//     const res = cb.apply(this, arg);    
//     console.log(`${cb.name} is excuted, the result is ${res}`)
//     // after excute the cb, you can do something
//     console.log(`${cb.name} is excuted done`);
//   }
// }
// function add(a, b){
//   return a+b;
// }
// const wrapFn1 = wrap(add);
// wrapFn1(1,2);

// another way to do it
Function.prototype.before = function(beforeFn){
  const self = this;
  return function(...arg){
    beforeFn.apply(self, arg);
    return self.apply(self, arg);
  }
}
Function.prototype.after = function(afterFn){
  const self = this;
  return function(...arg){
    const res = self.apply(self, arg);
    afterFn.apply(self, res);
    return res
  }
}
function add(a, b){
  console.log("add function is called");
  return a+b;
}
add = add.before((...arg)=>{
  console.log(`${this.name} will be excuted and the argments is ${arg.join(',')}`);
}).after((res)=>{
  console.log(`${this.name} is excuted and the result is ${res}`);
});
add(1,2);

// decorator


// curry function




// compose function




// lodash curry and compose function source code

