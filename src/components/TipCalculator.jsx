import { useState } from 'react'

export default function Tip() {
	const [bill, setBill] = useState(null)
	const [tip, setTip] = useState(null)
	const [total, settotal] = useState(null)
	const handleBill = () => {
		settotal((parseInt(bill) + parseInt(tip)).toFixed(2))
	}

	return (
		<>
			<h1>Tip Calculator</h1>
			<input
				className="bg-slate-400"
				value={bill}
				onChange={(e) => setBill(e.target.value)}
				type="number"
				id="billAmount"
			/>
			<input
				className="bg-slate-400 mt-4"
				value={tip}
				onChange={(e) => setTip(e.target.value)}
				type="number"
				id="tipPercent"
			/>
			<br />
			<button id="calculateAmount" onClick={handleBill}>
				total
			</button>
			<br />
			<p id="totalAmount">{total}</p>
		</>
	)
}
