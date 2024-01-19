import React, { useState } from 'react'

const SearchFilter = () => {
    const list = [
        "Apple","Banana","Orange","Litchi"
    ]
    const [filterList,setFilterList]=useState(list)
    const handleSearch =(e)=>{
        if(e.target.value===""){
            setFilterList(list)
        }
        const filterdItem = filterList.filter((item)=>item.toLowerCase().indexOf(e.target.value.toLowerCase())!==-1)
        setFilterList(filterdItem)
    }

   
  return (
    <div className='text-green-500 '>
<input type="text" onChange={handleSearch} />
{
    filterList && filterList.map((item)=>{
        return (
            <>
            <p>{item}</p>
            </>
        )
    })
}
    </div>
  )
}

export default SearchFilter