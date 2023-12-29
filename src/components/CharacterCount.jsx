import { useState } from 'react'

export default function CharacterCount() {
	const [count, setCount] = useState(0)
	const [input, setInput] = useState('')
	const handleCount = (text) => {
		return text.length
	}

	const handleInput = (e) => {
		const newText = e.target.value
		setInput(newText)
		setCount(handleCount(newText))
	}
	return (
		<div className='flex flex-col justify-center items-center gap-4 p-3'>
			<h1 className='text-blue-500 text-4xl'>Character Counter</h1>
			<textarea
				name=""
				value={input}
				onChange={handleInput}
				id="textInput"
				cols="30"
				rows="10"
                className='bg-slate-200  p-4 focus:outline-none text-pink-400 text-2xl '
			></textarea>
			<br /> <br />
			<div id="count" className='text-blue-500 text-3xl'> Total characters are :  {count}</div>
		</div>
	)
}
