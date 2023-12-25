import { useEffect, useState } from 'react'

export default function Timer() {
	const [timer, setTimer] = useState(0)
	const [input, setInput] = useState(0)
	const [isRunning, setIsRunning] = useState(false)

	useEffect(() => {
		let interval
		if (isRunning && timer < input) {
			interval = setInterval(() => {
				setTimer((prev) => prev + 1)
			}, 500)
		}
		return () => clearInterval(interval)
	}, [isRunning, timer, input])

	const handleTime = (event) => {
		const value = event.target.value
		setInput(value)
		setTimer(0)
	}

	const handleStart = () => {
		setIsRunning(true)
	}

	const handleStop = () => {
		setIsRunning(false)
	}

	return (
		<div className="flex flex-col justify-center items-center">
			<h1>Simple Timer!</h1>
			<input
				type="number"
				value={input}
				id="seconds-input"
				onChange={handleTime}
				className="bg-black text-white p-2"
			/>
			<button
				id="start"
				className={`bg-sky-800 px-10 my-4 `}
				disabled={isRunning}
				onClick={handleStart}
			>
				Start
			</button>
			<button
				id="stop"
				className="bg-sky-500 px-10"
				onClick={handleStop}
				disabled={!isRunning}
			>
				Stop
			</button>

			<div id="timer">{timer}</div>
		</div>
	)
}
