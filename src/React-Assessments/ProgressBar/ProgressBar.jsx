import React, { useState } from 'react'
const ProgressBar = () => {
    const [input,setIput]=useState(0);
  return (
    <div className='flex  justify-center items-center flex-col gap-5 text-4xl'>
        <div>ProgressBar</div>
        <p>Create a Progress Bar that should fill based on the input percentage value.</p>
        <input type="range" name="" id="" value={input} />
        <input type="number" value={input} name="" onChange={(e)=>setIput(e.target.value)} id="" />
    </div>
  )
}

export default ProgressBar