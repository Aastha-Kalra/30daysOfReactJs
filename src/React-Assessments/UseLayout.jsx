import React, { useEffect, useRef } from 'react'
import { useLayoutEffect } from 'react';

const UseLayout = () => {
    const inputRef = useRef();

    useEffect(()=>{
        console.log('useeffect called with value ' + ( inputRef.current.value = 'Aastha'));
    },[])

    useLayoutEffect(()=>{
        console.log("use layout called with value"+ " " + inputRef.current.value);
    },[])
  return (
  <div>
      <div>UseLayout</div>
      <p>
      The useLayoutEffect function is triggered synchronously before the DOM mutations are painted. However, the useEffect function is called after the DOM mutations are painted.
      </p>

      <input ref={inputRef} value={"peru"} type="text" name="" id="" />
  </div>
  )
}

export default UseLayout