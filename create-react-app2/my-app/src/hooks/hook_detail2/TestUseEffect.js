import React,{useState, useEffect, useCallback} from 'react'

export default function TestUseEffect() {
  const [count, setCount] = useState(0)

  const handleResize = useCallback(() => {
    // 把count输出
    console.log(`count is ${count}`)
  },[count]);
  
  useEffect(() => {
     // 让resize事件触发handleResize
     window.addEventListener('resize', handleResize)
     return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
    </div>
  );
}
