import React from 'react'
import InputControl from '../InputControl/InputControl' 
const Achievement = () => {
  return (
    <div>
        <label htmlFor="" className='text-xl flex justify-center items-center my-3'>List your Achievements</label>
        <InputControl label="Title" placeholder = "Enter the title eg. Reactjs Developer Ceritificate"/>
        <InputControl label="Description" placeholder = "Line 1 "/>
        <InputControl placeholder = "Line 2 "/>
    </div>
  )
}

export default Achievement