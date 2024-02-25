import React from 'react'
import InputControl from '../InputControl/InputControl'

const BasicInfo = ({value}) => {
  return (
    <div>
    <InputControl label="Name" placeholder="Enter your Name"  defaultValue={value.name}/>
    <InputControl label="Position" placeholder="Enter your Position eg. Frontend Developer"/>
    <InputControl label="Linkedin Link" placeholder="Enter your Linkedin profile link "/>
    <InputControl label="Github Link" placeholder="Enter your Github profile link "/>
    <InputControl label="Phone Number" placeholder="Enter your Phone number "/>
    <InputControl label="Email Id " placeholder="Enter your Email Id "/>
    </div>
  )
}

export default BasicInfo