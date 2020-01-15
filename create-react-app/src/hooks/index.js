import React, {useState} from 'react';
import { Button } from 'antd'

export default function StudyHooks(){
  const [count, setCount] = useState(1);

  return <div>
<span>{count}</span>
<Button onClick={setCount(count+1)}>+1</Button>
  </div>
}