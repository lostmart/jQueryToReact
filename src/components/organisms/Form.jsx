import { useDispatch } from 'react-redux'
import { createUser } from '../../features/formSlice'

const Form = ({ children }) => {
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		const data = new FormData(e.target)
		const readyData = Object.fromEntries(data.entries())

		for (const [key, value] of Object.entries(readyData)) {
			if (value === '') {
				alert(key + ' cant be empty !')
				return
			}
		}
		dispatch(createUser(readyData))
	}

	return <form onSubmit={handleSubmit}>{children}</form>
}

export default Form
