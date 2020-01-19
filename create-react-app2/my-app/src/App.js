import React, {useState} from 'react';
import { Button } from 'antd';
import logo from './logo.svg';
import './App.css';
// import StudyHook from './hooks/index';
// import UseDocTitle from './hooks/useDocTitle'
// import TestUseDocTitle from './hooks/testUseDocTitle';
// import TestUseEffect from './hooks/testUseEffect'
// import TestUseContext from './hooks/testUseContext';
// import TestUseState from './hooks/testUseState';
// import TestUseReducer from './hooks/testUseReducer';
// import TestUseCallback from './hooks/testUseCallback';
// import TestUseImperativeHandle from './hooks/testUseImperativeHandle';
// import TestMemo from './hooks/testMemo';
// import TestUseState4Child from './hooks/testUseState4Child';
// import Counter from './hooks/hook_detail/count'
// import Counter2 from './hooks/hook_detail/memo';
// import Effect from './hooks/hook_detail/effect';
// import LayoutEffect from './hooks/hook_detail/layoutEffect';
// import ForwardRef from './hooks/hook_detail/forwardRef';
// import { Counter1, Counter2 } from './hooks/hook_detail/customHook';
import CaptureValue from './hooks/hook_detail2/capture_value';

function App() {
  // let [ show, setShow ] = useState(true);

  return (
    <div className="App">
      {/* <StudyHook></StudyHook> */}
      {/* <Button onClick={()=>{ setShow(!show) }}>show</Button>
      {
        show ? <TestUseDocTitle></TestUseDocTitle> : null
      } */}
      {/* <TestUseDocTitle></TestUseDocTitle> */}
      {/* <TestUseEffect></TestUseEffect> */}
      {/* <TestUseContext></TestUseContext> */}
      {/* <TestUseState></TestUseState> */}
      {/* <TestUseReducer></TestUseReducer> */}
      {/* <TestUseCallback></TestUseCallback> */}
      {/* <TestUseImperativeHandle></TestUseImperativeHandle> */}
      {/* <TestMemo></TestMemo> */}
      {/* <TestUseState4Child></TestUseState4Child> */}
      {/* <Counter></Counter> */}
      {/* <Counter2></Counter2> */}
      {/* <Effect></Effect> */}
      {/* <LayoutEffect></LayoutEffect> */}
      {/* <ForwardRef></ForwardRef> */}
      {/* <div>
        <Counter1></Counter1>
        <Counter2></Counter2>
      </div> */}
      <CaptureValue></CaptureValue>
    </div>
  );
}

export default App;
