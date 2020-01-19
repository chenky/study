import React, {useState, useEffect} from 'react'

export default function Counter(){
  let [number,setNumber] = useState(0);
  let [text,setText] = useState('');
  // 相当于componentDidMount 和 componentDidUpdate
  useEffect(()=>{
      console.log('useEffect');
      let $timer = setInterval(()=>{
          setNumber(number=>number+1);
      },1000);
      return ()=>{
        clearInterval($timer);
      }
  },[text]);// 数组表示 effect 依赖的变量，只有当这个变量发生改变之后才会重新执行 efffect 函数
  console.log('parent called')
  return (
      <>
        <input value={text} onChange={(event)=>setText(event.target.value)}/>
        <p>{number}</p>
        <button>+</button>
      </>
  )
}
