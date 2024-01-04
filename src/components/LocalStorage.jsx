import React, { useEffect, useState } from 'react'
const Local = () => {
	const [input, setInput] = useState('')
	const handleInput = (e) => {
		let inputValue = e.target.value
		setInput(inputValue)
		localStorage.setItem('input', JSON.stringify(inputValue))
	}
	useEffect(() => {
		setInput(JSON.parse(localStorage.getItem('input')))
	})
	// Edit this component
	return (
		<div>
			<input
				data-testid="input-id"
				value={input}
				onChange={handleInput}
				type="text"
			/>
		</div>
	)
}

export default Local;
