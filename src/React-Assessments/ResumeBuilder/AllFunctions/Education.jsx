import React from 'react'
import InputControl from '../InputControl/InputControl'
const Education = ({value}) => {
  return (
    <div>
        <InputControl label= "Title" placeholder="Enter title eg. B.Tech"  defaultValue={value.title}/>
        <InputControl label= "College/School Name" placeholder="Enter name of your college/school" defaultValue={value.college}/>
        <InputControl label= "Start Date" placeholder="Enter start date of this education" defaultValue={value.startDate} />
        <InputControl label= "End Date" placeholder="Enter end date of this education" defaultValue={value.endDate}/>
    </div>
  )
}

export default Education