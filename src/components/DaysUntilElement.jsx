import { useState } from 'react'

export default function DaysUntilElement() {
	const [input, setInput] = useState('')
	const [result, setResult] = useState('')
	const [error, setError] = useState('')

	const handleDays = () => {
		const currentDate = new Date()
		const selectDate = new Date(input)
		if (isNaN(selectDate.getTime())) {
			setError('Invalid date format. Please enter a valid date.')
		} else if (selectDate < currentDate) {
			setError(
				'Error: Past Date Entered.'
			)
		} else {
			const timeDiff = selectDate - currentDate
			const daysDiff = Math.floor(timeDiff /  (1000* 60 * 60 * 24))
			setResult(daysDiff)
			setError('')
		}
	}

	return (
		<>
			<h1>Hello there! Days Until Element</h1>
			<input
				type="date"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				id="datePicker"
				className="border-2 "
			/>
			<button id="findDays" onClick={handleDays}>
				Find Days
			</button>

			<span id='daysLeft'> {result} </span>
			<div id="error">{error}</div>
		</>
	)
}
