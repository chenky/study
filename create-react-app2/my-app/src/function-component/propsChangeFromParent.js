// import React, {useState, useEffect} from 'react'

// function Child(props){
//   const [count, setCount] = useState(props.pcount);

//   const log = () => {
//     setCount(count+1);
//   };

//   useEffect(()=>{
//     setCount(props.pcount);
//   },[props.pcount]);

//   console.log("child count:", count);
//   return (
//     <div>
//       <p>child count {count}</p>
//       <button onClick={log}>child Click me</button>
//     </div>
//   );
// }

// function Parent(props){
//   const [count, setCount] = useState(0);

//   const log = () => {
//     setCount(count+1);
//   };

//   console.log("parent count:", count);

//   return (
//     <div>
//       <p>parent count {count}</p>
//       <button onClick={log}>parent Click me</button>
//       <Child pcount={count}></Child>
//     </div>
//   );
// }


// export default function PropsChangeFromParent() {
//   return (
//    <Parent></Parent>
//   )
// }

import React, {useState, useEffect, useRef, useReducer, useContext} from 'react';

const Store = React.createContext({count: 0});

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + 1,
      }
    default:
      return state;
  }
}

function Child(props){
  const { state, dispatch } = useContext(Store);

  const log = () => {
    dispatch({type: "add"});
  };
  const { count } = state;
  console.log("child count:", count);
  return (
    <div>
      <p>child count {count}</p>
      <button onClick={log}>child Click me</button>
    </div>
  );
}

function Parent(props){
  const { state, dispatch } = useContext(Store);

  const log = () => {
    dispatch({type: "add"});
  };

  const { count } = state;
  console.log("parent count:", count);
  return (
    <div>
      <p>parent count {count}</p>
      <button onClick={log}>parent Click me</button>
      <Child></Child>
    </div>
  );
}


export default function PropsChangeFromParent() {
  const [state, dispatch] = useReducer(reducer, {count:0});
  return (
    <Store.Provider value={{state, dispatch}}>
      <Parent></Parent>
    </Store.Provider>   
  )
}
