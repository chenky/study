import React,{useState,useEffect,useCallback} from 'react'

function useResize() {
  const [size, setSize] = useState(0);

  const handleResize = useCallback(()=>{
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  },[])

  useEffect(()=>{
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return size;
}

export default function TestUseResize(){
  const size = useResize();
return <span>width:{size.width},height:{size.height}</span>
}
