import React, { useState } from 'react'
const Calender = () => {
const [input, setInput] = useState('')
const handleInput = (e) => {
e.preventDefault();
const date = parseInt(input, 10);
if (isNaN(date) || date < 1 || date > 31) {
    alert('Please enter a valid date between 1 and 31.');
    return;
  }

var dayOfWeek = Math.floor(input % 7)
switch (dayOfWeek) {
case 1:
alert('Friday')
break;
case 2:
alert('Saturday')
break;
case 3:
alert('Sunday')
break;
case 4:
alert('Monday')
break;
case 5:
alert('Tuesday')
break;
case 6:
alert('Wednesday')
break;
case 0:
alert('Thursday')
break;

default:

break;
}

}
return (
    <div >
    <form action="" onSubmit={handleInput} className='flex  justify-center items-center flex-col gap-4' >
    <label htmlFor="date">
    <input value={input} type="text" id='date' className='h-14 bg-slate-300' onChange={(e) => setInput(e.target.value)} />
    </label>

    <button type='submit' className='text-white bg-sky-500 px-10 '>Get day </button>
    </form>
    </div>
    )
    }
    
    export default Calender;