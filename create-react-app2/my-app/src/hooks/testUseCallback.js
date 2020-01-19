import React, { useState, useEffect, useCallback, useMemo, useRef, useDebugValue} from 'react';
import { Button } from 'antd'

const Child = React.memo((props)=>{
  console.log('child called');
  return <button onClick={props.callback}>call back function</button>
})

// const Child = (props)=>{
//   console.log('child called');
//   return <button onClick={props.callback}>call back function</button>
// }


export default function TestUseCallback() {

  const [childAge, setChildAge] = useState(0);
  const [count, setCount] = useState(5);
 
  // const memoCallback = () => {
  //   setChildAge(childAge=>childAge+1);
  // }
  const memoCallback = useCallback(()=>{
    setChildAge(childAge=>childAge+1);
  },[]);

  const handleCount = () => {
    setCount(count=>count+1);
  }

  console.log('parent call:');

  return <div>
<button onClick={handleCount}>count:{count}</button>
<span>parent age:{childAge}, count: {count}</span>
{/* <Child></Child> */}
<Child callback={memoCallback}></Child>
    </div>
}
