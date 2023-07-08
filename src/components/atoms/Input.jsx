import React from 'react'

const Input = ({ type, id, value, onChange, onClick, onBlur }) => {
	return (
		<input
			onChange={onChange}
			onClick={onClick}
			onBlur={onBlur}
			type={type}
			id={id}
			value={value}
			autoComplete="off"
		/>
	)
}

export default Input
