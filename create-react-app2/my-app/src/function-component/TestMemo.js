import React, { createContext, memo, useMemo, useState, useContext, useReducer } from 'react';
// import useFetch from './customHooks/useFetch';

// const Store = React.createContext(null);

// function Parent() {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(0);
//   // const fetchData = useFetch(count, step);

//   return (
//     <Store.Provider value={{setCount}}>
//       <div>count: {count}</div>
//       <Child />
//     </Store.Provider>
//   );
// }

// const Child = memo((props) => {
//   const { setCount } = useContext(Store)

//   function onClick() {
//     setCount(count => count + 1)
//   }

//   return (
//     <button onClick={onClick}>count+1</button>
//   )
// });

const Store = createContext(null);

const reducer = (state, action) => {
  // console.log(state, action);
  switch (action.type) {
    case "incCount":
      // console.log({
      //   ...state, count: state.count +1,
      // });
      return {
        ...state, count: state.count +1,
      };
    case "incStep":
      return {
        ...state, step: state.step +1,
      };  
    default:
      return state;
  }
}

function Parent() {
  const [state, dispatch] = useReducer(reducer, { count: 0, step: 0 });

  return (
    <Store.Provider value={{ state, dispatch }}>
      <Count />
      <Step />
    </Store.Provider>
  );
}

// const Count = memo(() => {
//   const { state, dispatch } = useContext(Store);
//   console.log("Count called");
//   return (
//     <button onClick={() => dispatch({type:"incCount"})}>incCount {state.count}</button>
//   );
// });

// const Step = memo(() => {
//   const { state, dispatch } = useContext(Store);
//   console.log("Step called");
//   return (
//     <button onClick={() => dispatch({type:"incStep"})}>incStep {state.step}</button>
//   );
// });

const Count = () => {
  const { state, dispatch } = useContext(Store);  
  return (
  useMemo(()=>{
    console.log("Count called");
   return <button onClick={() => dispatch({type:"incCount"})}>incCount {state.count}</button>
  }, [state.count,dispatch])    
  );
};

const Step = () => {
  const { state, dispatch } = useContext(Store);  
  return (
    useMemo(()=>{ 
      console.log("Step called");
    return <button onClick={() => dispatch({type:"incStep"})}>incStep {state.step}</button>
  }, [state.step,dispatch])    
  );
};

export default function TestMemo() {
  return (
    <div>
      <Parent></Parent>
    </div>
  )
}
