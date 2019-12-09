export default function createStore(reducer, initState, enhancer){
  if(typeof initState === 'function' && typeof enhancer === 'undefined'){
    enhancer = initState;
    initState = undefined;
  }

  /*
  
  */
  if(typeof enhancer !== 'undefined'){
    if(typeof enhancer !== 'function'){
      throw new Error('exception the enhancer to be a function');
    }
    enhancer(createStore)(reducer, initState);
  }
}