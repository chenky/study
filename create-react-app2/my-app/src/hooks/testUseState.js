import React, {useState, useDebugValue} from 'react'
import { Button } from 'antd'
import mapUseState from './mapUseState';



export default function StudyHook() {
  const [info, setInfo] = useState({age:1, sex: 'man'});
  // const [info, setInfo] = mapUseState({age:1, sex: 'man'});
  // const [arr, setArr] = 

  // function setStateInfo(newInfo){
  //   setInfo({...newInfo});
  //   // setInfo(newInfo);
  // }

  function handleAge(){
    // ++info.age 
    // setInfo({...info});
    const newInfo = {age:10, sex: 'mwwwwan'}
    setInfo(newInfo);
    setTimeout(function(){
      console.log(info);
    },1000);
    console.log(info);
  }

  function handleSex(){
    info.sex = info.sex === 'man' ? 'woman': 'man'
    // setStateInfo(info);
    setInfo(info);
  }

  useDebugValue('test');

  return (
    <div>
<span>{info.age}</span>
  <span>{info.sex}</span>
<Button onClick={handleAge}>age+1</Button>
<Button onClick={handleSex}>set sex</Button>
    </div>
  )
}
