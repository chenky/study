import React, { useState } from 'react'

export default function TestUseState() {

  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(2);

  const log = () => {
    setCount(2);
    setCount1(3);
  };

  console.log('rerender');
  return (
    <div>
    <p>You clicked {count},{count1} times</p>
    <button onClick={log}>Click me</button>
  </div>
  )
}
