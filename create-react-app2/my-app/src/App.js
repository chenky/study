import React from 'react';
import './App.css';
// import HooksIndex from './hooks/index';
// import FnComTest from './function-component/index';
// import TestGetDerivedStateFromProps from './getDerivedStateFromProps/index';
// import './rxjs/index';
// import Timer from './rxjs/test-rxjs-hooks';
// import App1 from './rxjs/test-rxjs-hooks';
// import TestKeyChange from './testKeyChange/testKeyChange';
import Parent from './parent-child-component/parent';


function App() {
  // RxJsTest.demo1();
  // RxJsTest.demo2();
  // RxJsTest.demo3();
  return (
    <div className="App">
      <Parent></Parent>
      {/* <TestKeyChange></TestKeyChange> */}
      {/* <HooksIndex></HooksIndex> */}
      {/* <FnComTest></FnComTest> */}
      {/* <TestGetDerivedStateFromProps></TestGetDerivedStateFromProps> */}
      {/* <Timer></Timer> */}
      {/* <App1></App1> */}
    </div>
  );
}

export default App;
