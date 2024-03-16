import React from 'react'
import InputControl from '../InputControl/InputControl'

const BasicInfo = ({value, handleChange}) => {
  return (
    <div>
    <InputControl label="Name" placeholder="Enter your Name"  defaultValue={value.name}  onChange={(e)=>handleChange("name", e.target.value)}/>
    <InputControl label="Position" placeholder="Enter your Position eg. Frontend Developer" defaultValue={value.position}/>
    <InputControl label="Linkedin Link" placeholder="Enter your Linkedin profile link " defaultValue={value.linkedin}/>
    <InputControl label="Github Link" placeholder="Enter your Github profile link " defaultValue={value.github}/>
    <InputControl label="Phone Number" placeholder="Enter your Phone number " defaultValue={value.phone}/>
    <InputControl label="Email Id " placeholder="Enter your Email Id " defaultValue={value.email}/>
    </div>
  )
}

export default BasicInfo