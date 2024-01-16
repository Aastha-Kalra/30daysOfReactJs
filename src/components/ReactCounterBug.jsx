import { useState } from 'react'

export default function Counter() {
	const [number, setNumber] = useState(0)
	const increment = () => {
		setNumber((prev) => prev + 3)
	}

	return (
		<>
			<div className="card">
				<h1 data-testid="counter">{number}</h1>
				<button data-testid="incrementButton" onClick={increment}>
					Increment 3 times
				</button>
			</div>
		</>
	)
}
