import React, { useEffect, useState } from 'react'

import Input from '../atoms/Input'
import Label from '../atoms/Label'

const LabelInput = ({ groupData }) => {
	const [isActive, setActive] = useState(false)

	const [hasError, setError] = useState('')

	// onMount
	useEffect(() => {
		groupData.label.isActive && setActive(true)
	}, [])

	const [inputVal, setInputVal] = useState('')

	const handleActiveChange = () => {
		if (inputVal === '' && !groupData.label.isActive) {
			setActive(() => !isActive)
			return
		}
	}

	const handleChange = (e) => {
		const value = e.target.value
		setInputVal(() => value)

		if (value <= 0) {
			handleActiveChange()
		}
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
			<Label
				htmlFor={groupData.input.id}
				text={groupData.label.text}
				isActive={isActive}
				onclick={handleActiveChange}
			/>
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
