import React, { useState } from 'react'

const Form = ({ children, onSubmit }) => {
	const handleSubmit = (e) => {
		e.preventDefault()
		//console.log(e.target.firstName.value)
		// console.log(children)
		// console.log(e.target['firstName'].value)
		children.forEach((element) => {
			if (element.props.groupData) {
				const id = element.props.groupData.input.id
				// console.log(id)
				console.log(e.target[id].value)
			}
		})
		onSubmit()
	}

	return <form onSubmit={handleSubmit}>{children} </form>
}

export default Form
