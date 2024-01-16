import { useState } from 'react'
import './App.css'
export default function Toggle() {
	const [show, setShow] = useState(true)
	const handleToggle = () => {
		setShow(!show)
	}
	const pageStyle = {
		backgroundColor: show ? 'black' : 'lightgray',
		color:show?'white':'black',
		minHeight: '100vh', 
	}
	return (
		<div style={pageStyle} >
			<button id="toggle" className={`${show}? '' : off`}  onClick={handleToggle}>
				toggle
			</button>
			{show ? 'On' : 'Off'}
		</div>
	)
}
