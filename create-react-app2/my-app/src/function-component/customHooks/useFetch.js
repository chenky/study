import React,{ useRef, useCallback, useEffect } from 'react'


export default function useFetch(count, step) {
  const countRef = useRef(count);
  const stepRef = useRef(step);

  useEffect(() => {
    countRef.current = count;
    stepRef.current = step;
  });

  return useCallback(() => {
    const url =
      "https://v/search?query=" + countRef.current + "&step=" + stepRef.current;
  }, [countRef, stepRef]); // 依赖不会变，却能每次拿到最新的值
}
