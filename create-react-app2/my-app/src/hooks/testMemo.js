import React, {useState, useReducer,useMemo,useCallback} from 'react';
import isEqual from 'lodash/isEqual';
import cloneDeep from 'lodash/cloneDeep';

// const Child = React.memo((props)=>{
//   // const [data, setData] = useState({
//   //   count: 0,
//   //   name: 'cjg',
//   //   age: 18,
//   // });
  
//   // const handleClick = () => {
//   //   const { count } = data;
//   //   setData({
//   //     ...data,
//   //     count: count + 1,
//   //   })
//   // };

//   console.log('child called');

//   // return (<button onClick={handleClick}>count:{data.count}</button>)
// return (<span>count:{props.count},age:{props.age}, usMoney: {props.money.usMoney}</span>)
// }, (prevProps, nextProps)=>{
//   console.log('prev:' + JSON.stringify(prevProps.money, null, 4));
//   console.log('next:' + JSON.stringify(nextProps.money, null, 4));
//   // console.log(prevProps.count === nextProps.count, prevProps.age === nextProps.age, prevProps.money.usMoney === nextProps.money.usMoney);
//   return prevProps.count === nextProps.count && prevProps.age === nextProps.age && isEqual(prevProps.money, nextProps.money);
// });

// const Child = (props)=>{
//   console.log('child called');
//   // return (<span>count:{props.count}</span>)
// return <span>get count: {props.getCount()}</span>
// };

export default function TestMemo() {

  const [count, setCount] = useState(0);
  const [age, setAge] = useState(10);
  const [money, setMoney] = useState({usMoney: 5});

  // const [ ignore, forceUpdate ] = useReducer(x=>x+1, 5);
  const [ val, setVal ] = useState('');

  const handleCount = () => {
    // setCount(count => count<2 ? count+1 : 0);
    // setCount(1);
    setCount(count=>count+1)
    // forceUpdate();
  }

  const handleAge = () => {
    setAge(age=>age+1);
    // setAge(10);
  }

  const handleMoney = () => {    
    // const newUsMoney = money.usMoney + 1;
    // setMoney({
    //   ...money, usMoney: newUsMoney
    // })
    // setMoney(money=>{
    //   money.usMoney = money.usMoney+1;
    //   const newMone = cloneDeep(money);
    //   console.log(newMone);
    //   return newMone;
    // })
    // setMoney({
    //   usMoney: 5
    // })
  }

  // const getCount = () => {
  //   return count *2;
  // }

  const getCount = useCallback(() => {
    return count *2;
  }, [count]);

  const handleVal = (e) => {
    setVal(e.target.value);
  }

  return (
    <div>
      <button onClick={handleCount}>change count</button>
      <button onClick={handleAge}>change age</button>
      <button onClick={handleMoney}>change money</button>
      <input value={val} onChange={handleVal}></input>
      <Child count={count} age={age} money={money}></Child>
      {/* {useMemo(()=><Child count={count}></Child>, [count])} */}
      {/* <Child getCount={getCount}></Child> */}
      {/* { useMemo(()=><Child getCount={getCount}></Child>, [getCount]) } */}
    </div>
  )
}
