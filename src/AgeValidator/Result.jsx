import React from 'react'

const Result = ({isEligible , onBack}) => {
    const message = isEligible
    ? 'You are over 18, which means you are eligible'
    : 'You are under 18, which means you are not eligible';
  return (
    <>
    <p>{message}</p>
    <button onClick={onBack}>Go Back</button>
    </>
  )
}

export default Result