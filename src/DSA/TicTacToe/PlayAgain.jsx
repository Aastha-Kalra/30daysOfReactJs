import React from 'react'

const PlayAgain = ({playAgain}) => {
  return (
    <div>
        <button className=' bg-gradient-to-r from-orange-500 to-green-500 px-10 py-4 font-bold  rounded-2xl mt-10' onClick={playAgain}>Play Again</button>
    </div>
  )
}

export default PlayAgain