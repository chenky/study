// export default function createStore(reducer, initState, enhancer){
//   if(typeof initState === 'function' && typeof enhancer === 'undefined'){
//     enhancer = initState;
//     initState = undefined;
//   }

//   /*

//   */
//   if(typeof enhancer !== 'undefined'){
//     if(typeof enhancer !== 'function'){
//       throw new Error('exception the enhancer to be a function');
//     }
//     enhancer(createStore)(reducer, initState);
//   }
//   [].splice()
// }

// let arr = [1,2,3,4];
// arr.splice(-1,1);
// console.log(arr);

var listeners = [];
function subscribe(listener) {
  listeners.push(listener);
  var isSubscribed = true;
  // console.log("subscribe:"+isSubscribed);
  return function unsubscribe() {
    if (!isSubscribed) {
      return;
    }
    isSubscribed = false;
    // console.log("unsubscribe:"+isSubscribed);
    var index = listeners.indexOf(listener);
    listeners.splice(index, 1);
  };
}
var unsubscribe1 = subscribe(()=>{})
unsubscribe1();
unsubscribe1();
unsubscribe1();
var unsubscribe2 = subscribe(()=>{})
unsubscribe1();
unsubscribe2();
