import React from 'react'
import InputControl from '../InputControl/InputControl'
const Education = () => {
  return (
    <div>
        <InputControl label= "Title" placeholder="Enter title eg. B.Tech"/>
        <InputControl label= "College/School Name" placeholder="Enter name of your college/school"/>
        <InputControl label= "Start Date" placeholder="Enter start date of this education"/>
        <InputControl label= "End Date" placeholder="Enter end date of this education"/>
    </div>
  )
}

export default Education