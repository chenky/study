import React,{useState, useRef, useEffect} from 'react'

export default function useRaf(initVal) {
  const [val, _setVal] = useState(initVal);
  const refVal = useRef(initVal);

  // console.log("useRaf init:", val, refVal)

  const setVal = (newVal) => {
    refVal.current = newVal;
    _setVal(newVal)
  }

  // useEffect(() => {
  //   console.log("useRaf useEffect:", val);
  //   refVal.current = val;
  //   console.log("useRaf useEffect:", refVal.current);
  // }, [val]);

  // console.log("useRaf render:", val);

  return [refVal, setVal];  
}
