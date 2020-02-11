import React, { useCallback, useState, useEffect } from 'react';
import useEventCallback from './customHooks/useEventCallback';

export default function TestUseEventCallback() {
  const [count, setCount] = useState(0);

  // const cb = useCallback(
  //   () => {
  //     console.log(count);
  //   },
  //   [count],
  // );

  const cb = useEventCallback(
    () => {
      console.log(count);
    },
    [count],
  );

  useEffect(()=>{
    cb();
  });

  const log = () => {
    // setCount(count + 1);
    const newCount = count +1;
    setCount(newCount);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={log}>Click me</button>
    </div>
  );
}
