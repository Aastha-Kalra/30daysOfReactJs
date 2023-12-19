import React from 'react'
import Box from './Box'

const Board = ({board, onClick}) => {
 
  return (

    <div className='grid grid-cols-3 gap-4 '>
      {
        board.map((value, index)=>{
            return  <Box  value={value} onClick={()=>onClick(index)}/>
        })
      }
    </div>
  )
}

export default Board