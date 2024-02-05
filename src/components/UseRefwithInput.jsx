import React, { useEffect, useRef } from 'react'

export default function UseRefwithInput() {

    const inputRef=useRef(null)
 
  
  return (
    <div>
        <h1>UseRefwithInput</h1>
        <input placeholder='enter here' type='text' ref={inputRef}/>
        <button onClick={()=>console.log(inputRef.current.value)}>Add</button>

        </div>

  )
}
