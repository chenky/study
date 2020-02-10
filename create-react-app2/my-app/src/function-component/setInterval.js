import React,{ useState,useEffect, useReducer, useCallback } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case "tick":
      return {
        ...state,
        count: state.count + state.step
      };
  }
}

export default function SetInterval() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, []);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, [count]);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount(prevCount => prevCount + 1);
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, []);

  // const [state, dispatch] = useReducer(reducer, {count: 1, step: 2});
  // const { count, step } = state;

  // useEffect(() => {
  //   console.log("called effect");
  //   const id = setInterval(() => {
  //     dispatch({ type: "tick" });
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, [dispatch]);

  // return <h1>{count}</h1>;

  const [count, setCount] = useState(0);

  const getFetchUrl = useCallback(() => {
    console.log(count);
    return "https://v?query=" + count;
  }, [count]);

  // const getFetchUrl = () => {
  //   console.log(count);
  //   return "https://v?query=" + count;
  // };

  useEffect(() => {
    console.log('call useEffect');
    getFetchUrl();
  }, [getFetchUrl]);

  useEffect(()=>{
    setCount(5);
  },[]);
  
  console.log("called");

  return <h1>{count}</h1>;
}
