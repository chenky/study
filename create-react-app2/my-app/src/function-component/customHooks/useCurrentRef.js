import React,{ useRef, useEffect } from 'react'

export default function useCurrentRef(initValue,value) {

  const ref = useRef(initValue);

  useEffect(()=>{
    ref.current = value
  },[value]);

  return ref;
}
