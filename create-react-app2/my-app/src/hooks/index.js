import React, {useState} from 'react'
import { Button } from 'antd'

export default function StudyHook() {
  let [count, setCount] = useState(1);

  function handleClick(){
    setCount(++count);
  }

  console.log(count)

  return (
    <div>
<span>{count}</span>
<Button onClick={handleClick}>+1</Button>
    </div>
  )
}
