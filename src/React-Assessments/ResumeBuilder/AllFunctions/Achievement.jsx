import React from 'react'
import InputControl from '../InputControl/InputControl' 
const Achievement = ({value}) => {
  return (
    <div>
        <InputControl label="Title" placeholder = "Enter the title eg. Reactjs Developer Ceritificate" defaultVzlue={value.title}/>
        <InputControl label="Description" placeholder = "Line 1 "/>
        <InputControl placeholder = "Line 2 " defaultVzlue={value.description}/>
    </div>
  )
}

export default Achievement