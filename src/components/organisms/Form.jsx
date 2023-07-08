import React, { useState } from "react"

const Form = ({ children, onSubmit }) => {
	const [formData, setFormData] = useState([])

	const handleSubmit = (e) => {
		e.preventDefault()
		//console.log(e.target.firstName.value)
		// console.log(children)
		// console.log(e.target['firstName'].value)
		children.forEach((element) => {
			if (element.props.groupData) {
				const id = element.props.groupData.input.id
				setFormData((prev) => {
					return [...prev, e.target[id].value]
				})
				// console.log(element.props.groupData.input.id, e.target[id].value)
			}
		})
		onSubmit()
		console.log(formData);
	}

	return <form onSubmit={handleSubmit}>{children} </form>
}

export default Form
