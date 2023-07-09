import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../../features/formSlice'

const Form = ({ children, onSubmit }) => {
	const dispatch = useDispatch()

	const [formData, setFormData] = useState([])

	const handleSubmit = (e) => {
		e.preventDefault()
		const data = new FormData(e.target)
		const readyData = Object.fromEntries(data.entries())

		//onSubmit()
		//console.log(formData)
		dispatch(createUser(readyData))
	}

	return <form onSubmit={handleSubmit}>{children} </form>
}

export default Form
