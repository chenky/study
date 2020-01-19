import React, {useState, useReducer,useMemo,useCallback} from 'react';
import isEqual from 'lodash/isEqual';
import cloneDeep from 'lodash/cloneDeep';

const Child = React.memo((props)=>{

  console.log('child called');

return (<span>usMoney: {props.money.usMoney}</span>)
}, (prevProps, nextProps)=>{
  console.log('prev:' + JSON.stringify(prevProps.money, null, 4));
  console.log('next:' + JSON.stringify(nextProps.money, null, 4));
  return isEqual(prevProps.money.usMoney, nextProps.money.usMoney);
});

// const Child = React.memo((props)=>{

//   console.log('child called');

// return (<span>usMoney</span>)
// });


export default function TestUseState4Child() {
  const [money, setMoney] = useState({usMoney: 5});

  // const [ count, setCount ] = useState(1);

  const handleMoney = () => {    
    const newUsMoney = money.usMoney + 1;
    setMoney({
      ...money, usMoney: newUsMoney
    })
    // setMoney(money=>{
    //   money.usMoney = money.usMoney+1;
    //   const newMone = cloneDeep(money);
    //   console.log(newMone);
    //   return money;
    // });
  }

  console.log('parent called');

  return (
    <div>
<span>money:{money.usMoney}</span>
      <button onClick={handleMoney}>change money</button>
      {/* <Child></Child> */}
      <Child money={money}></Child>
    </div>
  )
}
