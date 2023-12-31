import { useState } from 'react'

export default function Table() {
	const [number, setNumber] = useState(null)
	const [table, setTable] = useState([])
	const handleTable = () => {
		let tableData = []
		for (let i = 0; i < 20; i++) {
			tableData.push(`${number} X ${i}= ${number * i}`)
		}
		setTable(tableData)
	}
	return (
		<>
			<h1>Hello there!</h1>
			<input
				type="number"
				onChange={(e) => setNumber(e.target.value)}
				value={number}
				className="bg-slate-300"
				name=""
				id="number"
			/>
			<br />
			<button id='generateTable' className="" onClick={handleTable}>
				Generate
			</button>
			<ul id="multiplicationTable" style={{ listStyleType: "none", padding: 0 }}>
        {table.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
		</>
	)
}
