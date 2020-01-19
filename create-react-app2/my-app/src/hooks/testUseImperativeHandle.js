import React,{useRef, useImperativeHandle,forwardRef, useCallback} from 'react'

function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} />;
}
FancyInput = forwardRef(FancyInput);

// export default function testUseImperativeHandle() {

//   const fcRef = useCallback((node)=>{
//     if(node!==null){
//       node.focus();
//     }
//   },[])
  

//   return (
//     <div>
//       <span>aaa</span>
//       <FancyInput ref={fcRef}></FancyInput>
//       <input placeholder='test'></input>
//     </div>
//   )
// }
