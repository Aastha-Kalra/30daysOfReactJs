import React, { useState } from 'react'

const Responsive = () => {
    const [open , setOpen]= useState(false);

    const handleOpen=()=>{
        setOpen(!open)
    }
  return (
    <div className="bg-black h-screen text-white flex items-center flex-col gap-5 text-3xl">
         <div className="md:text-5xl font-bold">Responsive Navigation Menu</div>

         <div className='md:hidden'>
            {
                open?  <button onClick={handleOpen}>Close</button>: <button onClick={handleOpen}>Menu</button>
            }
          
         </div>

         <div className='w-full flex justify-center items-center'>
            <ul className={`flex justify-center items-center gap-14 cursor-pointer flex-col md:flex-row bg-blue-400 absolute top-44 md:relative md:top-0 w-full  transition-all  ease-in  duration-500 p-8 md:p-2 ${open? 'top-40':'-top-[468px]'}`}> 
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Contact Us</li>
            </ul>
         </div>

    </div>
  )
}

export default Responsive