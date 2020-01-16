import React, {useState} from 'react'
import { Button } from 'antd'

export default function StudyHook() {
  let [info, setInfo] = useState({age:1, sex: 'man'});

  function setStateInfo(newInfo){
    setInfo({...newInfo});
    // setInfo(newInfo);
  }

  function handleAge(){
    ++info.age
    setStateInfo(info)
  }

  function handleSex(){
    info.sex = info.sex === 'man' ? 'woman': 'man'
    setStateInfo(info);
  }

  

  return (
    <div>
<span>{info.age}</span>
  <span>{info.sex}</span>
<Button onClick={handleAge}>age+1</Button>
<Button onClick={handleSex}>set sex</Button>
    </div>
  )
}
