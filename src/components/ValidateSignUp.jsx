import React, { useState } from 'react'
import styled from 'styled-components'

const SignUpForm = () => {
	const [data, setData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: ''
	})

	const [error, setError] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target
		setData((prev) => ({ ...prev, [name]: value }))
	}
	const passwordMinLength = 8
	const handleSubmit = (e) => {
		e.preventDefault()

		// Email validation regex
		const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
		if (
			data.firstName !== '' &&
			data.lastName !== '' &&
			emailRegex.test(data.email) &&
			data.password.length >= passwordMinLength &&
			data.confirmPassword === data.password
		) {
			setError(false)
			console.log('Form submitted successfully')
		} else {
			setError(true)
		}
	}

	return (
		<Wrapper>
			<form onSubmit={handleSubmit}>
				<input
					data-testid="first-name-id"
					type="text"
					name="firstName"
					placeholder="First Name"
					value={data.firstName}
					onChange={handleChange}
				/>
				{error && data.firstName === '' && (
					<p data-testid="first-name-error-id" className="error">
						First name cannot be empty
					</p>
				)}
				<input
					data-testid="last-name-id"
					type="text"
					name="lastName"
					placeholder="Last Name"
					value={data.lastName}
					onChange={handleChange}
				/>
				{error && data.lastName === '' && (
					<p data-testid="last-name-error-id" className="error">
						Last name cannot be empty
					</p>
				)}
				<input
					data-testid="email-id"
					type="email"
					name="email"
					placeholder="Email Address"
					value={data.email}
					onChange={handleChange}
				/>
				{error &&
					!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(
						data.email
					) && (
						<p data-testid="email-error-id" className="error">
							Invalid email address
						</p>
					)}
				<input
					data-testid="password-id"
					type="password"
					name="password"
					placeholder="Password"
					value={data.password}
					onChange={handleChange}
				/>
				{error && data.password.length < passwordMinLength && (
					<p data-testid="password-error-id" className="error">
						Password must be at least {passwordMinLength} characters
					</p>
				)}
				<input
					data-testid="confirm-password-id"
					type="password"
					name="confirmPassword"
					placeholder="Confirm Password"
					value={data.confirmPassword}
					onChange={handleChange}
				/>
				{error && data.confirmPassword !== data.password && (
					<p
						data-testid="confirm-password-error-id"
						className="error"
					>
						Passwords do not match
					</p>
				)}
				<button type="submit">Sign Up</button>
			</form>
		</Wrapper>
	)
}

export default SignUpForm

const Wrapper = styled.div`
	margin-top: 24px;
	font-family: sans-serif;

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	input {
		padding: 8px 12px;
		font-size: 18px;
		margin-bottom: 6px;
		width: clamp(200px, 40%, 400px);
	}

	button {
		padding: 10px 20px;
		font-size: 18px;
		border: none;
		border-radius: 4px;
		background-color: #333;
		color: #fff;
		cursor: pointer;
		margin-top: 24px;

		&:hover {
			opacity: 0.8;
		}
	}

	.error {
		margin: 0 0 24px 0;
		color: red;
	}
`
