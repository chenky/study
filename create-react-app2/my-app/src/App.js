import React, {useState} from 'react';
import { Button } from 'antd';
import logo from './logo.svg';
import './App.css';
import StudyHook from './hooks/index';
// import UseDocTitle from './hooks/useDocTitle'
import TestUseDocTitle from './hooks/testUseDocTitle';

function App() {
  let [ show, setShow ] = useState(true);

  return (
    <div className="App">
      <StudyHook></StudyHook>
      <Button onClick={()=>{ setShow(!show) }}>show</Button>
      {
        show ? <TestUseDocTitle></TestUseDocTitle> : null
      }
      
    </div>
  );
}

export default App;
