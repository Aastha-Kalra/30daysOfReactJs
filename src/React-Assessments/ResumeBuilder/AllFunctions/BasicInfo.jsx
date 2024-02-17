import React from 'react'
import InputControl from '../InputControl/InputControl'

const BasicInfo = () => {
  return (
    <div>
    <InputControl label="Name" placeholder="Enter your Name"/>
    <InputControl label="Title" placeholder="Enter your Title eg. Frontend Developer"/>
    <InputControl label="Linkedin Link" placeholder="Enter your Linkedin profile link "/>
    <InputControl label="Github Link" placeholder="Enter your Github profile link "/>
    </div>
  )
}

export default BasicInfo