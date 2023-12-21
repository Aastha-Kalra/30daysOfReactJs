import React from 'react'

const ScoreBoard = ({scores, xplaying}) => {
    const {xScore, oScore} = scores
  return (
    <div className='flex flex-row  w-96 my-5 rounded-2xl bg-white/90 shadow-md shadow-white/30 justify-center items-center'>
<span className={`text-orange-500 font-bold text-2xl  text-center border-b-8 rounded-l-2xl  border-orange-500 w-full ${!xplaying && "border-b-transparent"}`}>X- {xScore}</span>
<br />

<span className={`text-green-500 font-bold text-2xl text-center border-b-8 rounded-r-2xl border-green-900 w-full ${xplaying && "border-b-transparent"}`}>O- {oScore}</span>
    </div>
  )
}

export default ScoreBoard