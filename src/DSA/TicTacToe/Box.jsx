import React from 'react'

const Box = ({value, onClick}) => {
    const style = value === "X"? "text-yellow-500":"text-sky-400"
  return (
    <button className={`${style} bg-green-800 w-32 h-32 font-bold text-6xl rounded-xl text-white `} onClick={onClick}>{value}</button>
  )
}

export default Box;
