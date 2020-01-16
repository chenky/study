import React, { useState } from 'react';
import useDocTitle from './useDocTitle';

export default function TestUseDocTitle() {
  // useDocTitle("ge dfajdlk");
  const [count, setCount] = useState(0);
  useDocTitle(count);

  function handleClick(){
    setCount(count+1); 
    // updateDocTitle(count);   
  }

  return <div>
<div>{count}</div>
    <button onClick={handleClick}></button>
  </div>
}
