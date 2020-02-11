import React,{ useRef, useCallback, useEffect } from 'react';

export default function useEventCallback(fn, dependencies) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current = fn;
  }, [fn, ...dependencies]);

  return useCallback(() => {
    console.log("useEventCallback's use callback is called");
    const fn = ref.current;
    return fn();
  }, [ref]);
}