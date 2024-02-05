import React, { useContext } from 'react'
import {GlobalContext} from './context/index'
const Hook = () => {
  const {theme,setTheme} = useContext(GlobalContext);
  return (
   <div>
     <div>Hook</div>
     <button onClick={(e)=>setTheme(theme==="light"?"dark":"light")}  className="bg-yellow-400 px-4 py-2 my-3 ">Use Theme</button>
   </div>
  )
}

export default Hook