import React,{useState, useRef, useEffect, useCallback} from 'react'

export default function CaptureValue (){
  const [count, setCount] = useState(0);
  const refObj = useRef({value: 0});

  // useEffect(()=>{
  //   console.log(refObj.current.value);
  // },[refObj.current.value]);
  
  function increateCount (){
    const newCount = count +1;
    setCount(newCount);
    refObj.current.value = newCount;
  }
  
  function showCount (){
      // setTimeout(() => console.log(`你点击了${count.value}次`), 3000);
      setTimeout(() => console.log(`你点击了${refObj.current.value}次`), 3000);
  }

  // const showCount = useCallback(()=>{
  //   setTimeout(() => console.log(`你点击了${count.value}次`), 3000);
  // }, [count]);
  
  return (
      <div>
          <p>点击了{count}次</p>
          <button onClick={increateCount}>增加点击次数</button>
          <button onClick={showCount}>显示点击次数</button>
      </div>
  );
}
