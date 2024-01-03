import { useState } from 'react'
function Calculator() {
	const [num1, setNum1] = useState(0)
	const [num2, setNum2] = useState(0)
	const [result, setResult] = useState(0)

	const Add = () => {
		setResult(parseInt(num1) + parseInt(num2))
	}
	const Sub = () => {
		setResult(parseInt(num1) - parseInt(num2))
	}
	const Mul = () => {
		setResult(parseInt(num1) * parseInt(num2))
	}
	const Reset = () => {
		setResult('')
		setNum1(0)
		setNum2(0)
	}


	return (
		<>
			<h1>Calculator</h1>
			<input
				type="number"
				value={num1}
				onChange={(e) => setNum1(e.target.value)}
				name=""
				id="num1"
			/>
			<br /> <br />
			<input
				type="number"
				value={num2}
				onChange={(e) => setNum2(e.target.value)}
				name=""
				id="num2"
			/>
			<br />
			<br />
			<button id="add" onClick={Add}>
				Add
			</button>
			<button id="subtract" onClick={Sub}>
				Sub
			</button>
			<button id="multiply" onClick={Mul}>
				Mul
			</button>
			<button id="reset" onClick={Reset}>
				Reset
			</button>
			<p id="output"> {result} </p>
		</>
	)
}

export default Calculator;
