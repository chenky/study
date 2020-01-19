import React, { useState } from 'react';

export default function useMapState(initState){
  const [state, setState] = useState(initState);
  return [state, (state)=>{ setState(Object.prototype.toString.call(state) === '[object Object]' ? {...state} : state) }];
}