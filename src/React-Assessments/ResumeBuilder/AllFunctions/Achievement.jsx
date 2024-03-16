import React from 'react'
import InputControl from '../InputControl/InputControl' 
const Achievement = ({value}) => {
  return (
    <div>
        <InputControl label="Title" placeholder = "Enter the title eg. Reactjs Developer Ceritificate"/>
        <InputControl label="Description" placeholder = "Line 1 "/>
        <InputControl placeholder = "Line 2 "/>
    </div>
  )
}

export default Achievement