// function createSubscribeFactory(){
//   let listeners = [];
//   return {
//     notify: function() {
//       for (let index = 0; index < listeners.length; index++) {
//         listeners[index]();        
//       }
//     },
//     subscribe: function(listener){
//       listeners.push(listener);
//       return listener;
//     },
//     unsubscribe: function(listener){
//       listeners.splice(listeners.indexOf(listener), 1);
//     }
//   }
// };
// function log1(){
//   console.log('log1');
// }
// function log2(){
//   console.log('log2');
// }
// function log3(){
//   console.log('log3');
// }
// function log4(){
//   console.log('log4');
// }

// let s1 = createSubscribeFactory();
// s1.subscribe(log1)
// let log2Ref = s1.subscribe(()=>{
//   log2();
//   s1.unsubscribe(log2Ref);
// })
// s1.subscribe(log3)
// s1.subscribe(log4)
// s1.notify();

function createSubscribeFactory(){
  // let current = [];
  // let next = [];
  let listeners = [];
  return {
    notify: function() {
      // let listeners = current = next;
      // for (let index = 0; index < listeners.length; index++) {
      //   listeners[index]();        
      // }
      let listenersCopy = [...listeners];
      for (let index = 0; index < listenersCopy.length; index++) {
        listenersCopy[index]();        
      }
    },
    subscribe: function(listener){
      // if(current === next){
      //   next = [...current];
      // }
      // next.push(listener);
      listeners.push(listener);
      let isSubscribed = true;
      return function unsubscribe(){
        if(!isSubscribed) return;
        isSubscribed = false;
        // if(current === next){
        //   next = [...current];
        // }
        // next.splice(next.indexOf(listener), 1);
        listeners.splice(listeners.indexOf(listener), 1);
      } 
    }
  }
};
function log1(){
  console.log('log1');
}
function log2(){
  console.log('log2');
}
function log3(){
  console.log('log3');
}
function log4(){
  console.log('log4');
}

let s1 = createSubscribeFactory();
s1.subscribe(log1);
let unsubscribeLog2 = s1.subscribe(()=>{
  log2();
  unsubscribeLog2();
})
s1.subscribe(log3)
s1.subscribe(log4)
s1.notify();
// s1.notify();

// let b =[2];
// let c =[3];
// let a = b = c;
// let a = b;
// console.log(a,b);
// console.log(a,b,c);
// c.push(3);
// c=[4];
// b = [22];
// a = [1]
// console.log(a,b)
// console.log(a,b,c);
