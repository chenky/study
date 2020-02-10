import React, { useState, useRef, useEffect } from 'react';
import useCurrentRef from './customHooks/useCurrentRef';

export default function ErrorValue() {
  const [count, setCount] = useState(1);
  // const ref = useRef(count);
  const ref = useCurrentRef(0, count);

  // useEffect(() => {
  //   ref.current = count;
  //   return () => {
  //     return null
  //   };
  // })

  const log = () => {
    // setCount(count + 1);
    const newCount = count +1;
    setCount(newCount);
    setTimeout(() => {
      // console.log(count);
      // console.log(newCount);
      console.log(ref.current);
    }, 3000);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={log}>Click me</button>
    </div>
  );
}
