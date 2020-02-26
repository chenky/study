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
// Function.prototype.before = function(beforeFn){
//   const self = this;
//   return function(...arg){
//     beforeFn.apply(self, arg);
//     return self.apply(self, arg);
//   }
// }
// Function.prototype.after = function(afterFn){
//   const self = this;
//   return function(...arg){
//     const res = self.apply(self, arg);
//     afterFn.call(self, res);
//     return res
//   }
// }
// function add(a, b){
//   console.log("add function is called");
//   return a+b;
// }
// const newAdd = add.before((...arg)=>{
//   console.log(`${this.name} will be excuted and the argments is ${arg.join(',')}`);
// }).after((res)=>{
//   console.log(`${this.name} is excuted and the result is ${res}`);
// });
// newAdd(1,2);

// decorator, can decorate class and property
// @decorator
// class A {}
// // same as
// class A {}
// A = decorator(A) || A;

// function simpleTestable(target){
//   return target.prototype.isTestable = true;
// }

// function testable(isTestable){
//   return function(target){
//     target.prototype.isTestable = isTestable;
//   }
// }

// function mixins(...list){
//   return function(target){
//     Object.assign(target.prototype,...list);
//   }
// }

// function readonly(target, name, descriptor){
  // descriptor对象原来的值如下
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // };
//   descriptor.writable = false;
//   return descriptor;
// }

// class Person{
//   @readonly
//   name() { return `${this.first} ${this.last}` }
// }

// const p1 = new Person();
// console.log(p1.name);
// p1.name = "aa";
// readonly(Person.prototype, "name")

// decorator can be only use in class and class property, can not use in function, cause Function promotion
// var counter = 0;
// var add = function () {
//   counter++;
// };
// @add
// function foo() {
// }
// same as
// let counter;
// let add;
// @add
// function foo(){

// }
// counter=0;
// add = function(){
//   counter++;
// }
// core-decorators.js 类库

// curry function
// function curry(fn){
//   const finalArgs = [];
//   return function temp(...args){
//     finalArgs.push(...args);
//     if(finalArgs.length>=fn.length){
//       return fn.apply(this, finalArgs)
//     }
//     return temp
//   }
// }

// function add(a,b,c){
//   return a+b+c;
// }
// const curryAdd = curry(add);
// console.log(curryAdd(1)(2)(3));

// function Multiply(a,b,c){
//   return a*b*c;
// }
// const curryMultiply = curry(Multiply);
// console.log(curryMultiply(5,6)(2));

// test fn argments length
// function testArgmentsLen(a, b, c){
//   console.log('testArgmentsLen.length:', testArgmentsLen.length);
//   console.log('arguments.length:', arguments.length);
// }
// testArgmentsLen(1);


/// reduce function
/// reference: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// 求和
// const res = [0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array)=>{
//   return accumulator+=currentValue;
// });
// console.log(res);
// const res1 = [0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array)=>{
//   return accumulator+=currentValue;
// }, 10);
// console.log(res1);

// var sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue.x;
// }, 2)
// console.log(sum) // logs 6

// 展开数组
// const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//   function(a, b) {
//     return a.concat(b);
//   },
//   []
// );

// 计算单词出现的次数
// var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
// const allNames = names.reduce((allNames, name)=>{
//   if(name in allNames){
//     allNames[name]++;
//   } else{
//     allNames[name] = 1;
//   }
//   return allNames;
// },{});
// console.log(allNames);

// 数组对象，按属性分组
// var people = [
//   { name: 'Alice', age: 21 },
//   { name: 'Max', age: 20 },
//   { name: 'Jane', age: 20 }
// ];
// function groupBy(objectArray, property){
//   return objectArray.reduce((obj, current) => {
//     const key = current[property];
//     if(!obj[key]){
//       obj[key] = [];
//     }
//     obj[key].push(current);
//     return obj
//   }, {});
// }
// var groupedPeople = groupBy(people, 'age');
// console.log(groupedPeople);

// 数组去重
// var myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// var myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
//   if (accumulator.indexOf(currentValue) === -1) {
//     accumulator.push(currentValue);
//   }
//   return accumulator
// }, []);
// console.log(myOrderedArray);

// 串行执行promise
// function runPromiseInSequence(promises, input){
//   return promises.reduce((previous, current) => {
//     return previous.then(current);
//   }, Promise.resolve(input));
// }
// // promise function 1
// function p1(a) {
//   return new Promise((resolve, reject) => {
//     resolve(a * 5);
//   });
// }
// // promise function 2
// function p2(a) {
//   return new Promise((resolve, reject) => {
//     resolve(a * 2);
//   });
// }
// // function 3  - will be wrapped in a resolved promise by .then()
// function f3(a) {
//  return a * 3;
// }
// // promise function 4
// function p4(a) {
//   return new Promise((resolve, reject) => {
//     resolve(a * 4);
//   });
// }
// const f12=x=>2*x;
// const f13=x=>3*x;
// const f14=x=>4*x;
// // const promiseArr = [p1, p2, f3, p4];
// const promiseArr = [f12, f13, f14];
// runPromiseInSequence(promiseArr, 10)
//   .then(console.log);   // 1200

// 使用reduce实现map
// if(!Array.prototype.mapUsingReduce){
//   Array.prototype.mapUsingReduce = function(callback, thisArg){
//     return this.reduce((all,current, index, arr)=>{
//       const newVal = callback.call(thisArg, current, index, arr);
//       all.push(newVal);
//       return all;
//     }, []);
//   }
// }

// reduce polyfill
// if(!Array.prototype.reduce1){
  // Array.prototype.reduce = function(callback, initialValue)
//   Object.defineProperty(Array.prototype, 'reduce1', {
//     value: function(callback, initialValue){
//       if (this === null) {
//         throw new TypeError( 'Array.prototype.reduce ' + 
//           'called on null or undefined' );
//       }
//       if (typeof callback !== 'function') {
//         throw new TypeError( callback +
//           ' is not a function');
//       } 
      
//       let o = Object(this);
//       let len = o.length;

//       let k=0, value;
//       if(initialValue){
//         value = initialValue;
//       } else {
//         while (k < len && !(k in o)) {
//           k++; 
//         }

//         // 3. If len is 0 and initialValue is not present,
//         //    throw a TypeError exception.
//         if (k >= len) {
//           throw new TypeError( 'Reduce of empty array ' +
//             'with no initial value' );
//         }
//         value = o[k++];
//       }

//       while (k<len) {
//         value = callback(value, o[k], k, o)
//         k++;
//       }

//       return value;  
//     }
//   })
// }
// console.log([1,2,3,4].reduce1((prev, current)=>prev+current));

// compose function
// function compose(...fns){
//   return function(...args){
//     return fns.reduce((acc, fn)=>{
//       console.log(fn.name,acc);
//       if(Array.isArray(acc)){
//         return fn.apply(this, acc);
//       }
//       return fn.call(this, acc);
//     }, args);
//   }
// }

// function add(...args){
//   return args.reduce((total, currentValue)=>{
//     total+=currentValue;
//     return total;
//   });
// }
// // function multiply(a, b, c){
// //   return a*b*c;
// // }
// const double = (...args) =>{
//   console.log(args);
//   return args[0]*2;
// } 
// const triple = (...args) => args[0]*3
// const quadruple = (...args) => args[0]*4
// // console.log(add(1,2,3));
// // console.log(multiply(3,2,3));
// const c1 = compose(add, double, triple, quadruple);
// console.log(c1(1,2));

// lodash curry and compose function source code
// reference: https://github.com/lodash/lodash/tree/npm/fp

