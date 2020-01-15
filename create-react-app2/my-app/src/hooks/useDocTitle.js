import React, { useEffect } from 'react'

export default function useDocTitle(title) {
  useEffect(()=>{
    document.title = title;
    return ()=>{
      document.title = '默认标题';
    }
  },[title]);
}