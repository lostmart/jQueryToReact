import React, { useEffect, useState } from 'react'

import Input from '../atoms/Input'
import Label from '../atoms/Label'

const LabelInput = ({ groupData }) => {

	const [isActive, setActive] = useState(false)

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

	return (
		<div className="form-control">
			<Input
				onChange={handleChange}
				onClick={handleChange}
				onBlur={handleChange}
				type={groupData.input.type}
				id={groupData.input.id}
				value={inputVal}
				name={groupData.input.id}
			/>
			<Label
				htmlFor={groupData.input.id}
				text={groupData.label.text}
				isActive={isActive}
				onclick={handleActiveChange}
			/>
		</div>
	)
}

export default LabelInput
