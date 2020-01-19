import React,{useRef, useImperativeHandle} from 'react'

function Child(props, ref){
  const inputRef = useRef();
  useImperativeHandle(ref, ()=>{
    return {
      focus: ()=>{
        inputRef.current.focus();
      }
    }
  })
  return (
    // <input type="text" ref={ref}/>
    <input type="text" ref={inputRef}/>
  )
}
Child = React.forwardRef(Child);

export default function Parent() {
  // let [number,setNumber] = useState(0); 
  // 在使用类组件的时候，创建 ref 返回一个对象，该对象的 current 属性值为空
  // 只有当它被赋给某个元素的 ref 属性时，才会有值
  // 所以父组件（类组件）创建一个 ref 对象，然后传递给子组件（类组件），子组件内部有元素使用了
  // 那么父组件就可以操作子组件中的某个元素
  // 但是函数组件无法接收 ref 属性 <Child ref={xxx} /> 这样是不行的
  // 所以就需要用到 forwardRef 进行转发
  const parentInputRef = useRef();//{current:''}
  function getFocus(){
    parentInputRef.current.value = 'focus';
    parentInputRef.current.focus();
  }
  return (
      <>
        <Child ref={parentInputRef}/>
        <button onClick={getFocus}>获得焦点</button>
      </>
  )
}
