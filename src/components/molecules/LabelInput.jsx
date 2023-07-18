import React, { useState, useEffect } from 'react'

import Input from '../atoms/Input'
import Label from '../atoms/Label'

const LabelInput = ({ groupData, submitted }) => {
	const [hasError, setError] = useState('')

	const [inputVal, setInputVal] = useState('')

	// Every rerender
	useEffect(() => {
		submitted && setInputVal('')
	})

	const handleChange = (e) => {
		const value = e.target.value
		setInputVal(() => value)
	}

	const handleBlur = () => {
		if (inputVal === '') {
			setError(() => "This can't be empty !")
		} else {
			setError(false)
		}
	}

	return (
		<div className="form-control">
			<Label htmlFor={groupData.input.id} text={groupData.label.text} />
			<Input
				onChange={handleChange}
				onClick={handleChange}
				onBlur={handleBlur}
				type={groupData.input.type}
				id={groupData.input.id}
				value={inputVal}
				error={hasError}
				name={groupData.input.id}
			/>
		</div>
	)
}

export default LabelInput
