// import React,{useState, useRef, useEffect, useCallback} from 'react'

// export default function CaptureValue (){
//   const [count, setCount] = useState(0);
//   const refObj = useRef({value: 0});
  
//   function increateCount (){
//     const newCount = count +1;
//     setCount(newCount);
//     console.log("after setCount:", count, "and the newCount:", newCount)
//     refObj.current.value = newCount;
//   }
  
//   function showCount (){
//       setTimeout(() => console.log(`你点击了${count}次`), 3000);
//       setTimeout(() => console.log(`你点击了(use useRef get the correct value)${refObj.current.value}次`), 3000);
//   }
  
//   return (
//       <div>
//           <p>点击了{count}次</p>
//           <button onClick={increateCount}>增加点击次数</button>
//           <button onClick={showCount}>显示点击次数</button>
//       </div>
//   );
// }

import React,{useState, useRef, useEffect, useCallback} from 'react';
import useRaf from './useRaf'

export default function MessageThread() {
  // const [message, setMessage] = useState("");
  // const refObj = useRef("");

  // useEffect(() => {
  //   refObj.current  = message;
  // }, [message])

  const [message, setMessage] = useRaf("");

  const showMessage = () => {
    alert("You said: " + message.current);
  };

  const handleSendClick = () => {
    setTimeout(showMessage, 3000);
  };

  const handleMessageChange = e => {
    setMessage(e.target.value);
  };

  return (
    <>
      <input value={message.current} onChange={handleMessageChange} />
      <button onClick={handleSendClick}>Send</button>
    </>
  );
}

// import React from 'react';
// import useRaf from './useRaf'

// export default function CaptureValue (){
//   const [count, setCount] = useRaf(0);
  
//   function increateCount (){
//     const newCount = count.current +1;
//     setCount(newCount);
//     console.log("after setCount:", count.current, "and the newCount:", newCount)
//   }
  
//   console.log("capture value component render")

//   return (
//       <div>
//           <p>点击了{count.current}次</p>
//           <button onClick={increateCount}>增加点击次数</button>
//       </div>
//   );
// }
