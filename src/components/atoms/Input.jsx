import React from 'react'

const Input = (props) => {
	const { type, id, value, onChange, onClick, onBlur, name, error } = props

	const handleChange = (e) => {
		onChange(e)
	}

	return (
		<>
			<input
				onChange={handleChange}
				onClick={onClick}
				onBlur={onBlur}
				type={type}
				id={id}
				value={value}
				name={name}
				autoComplete="off"
				required
			/>
			{error && <span className="error">{error}</span>}
		</>
	)
}

export default Input
