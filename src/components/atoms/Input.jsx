import React from 'react'

const Input = ({ type, id, value, onChange, onClick, onBlur, name }) => {
	return (
		<input
			onChange={onChange}
			onClick={onClick}
			onBlur={onBlur}
			type={type}
			id={id}
			value={value}
			name={name}
			autoComplete="off"
		/>
	)
}

export default Input
