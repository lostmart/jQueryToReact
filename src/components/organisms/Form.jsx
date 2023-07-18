import { useDispatch } from 'react-redux'
import { createUser } from '../../features/formSlice'

const Form = ({ children, onSubmit }) => {
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		const data = new FormData(e.target)
		const readyData = Object.fromEntries(data.entries())

		for (const [key, value] of Object.entries(readyData)) {
			if (value === '') {
				onSubmit('error')
				return
			}
		}
		dispatch(createUser(readyData))
		onSubmit(readyData)
	}

	return <form onSubmit={handleSubmit}>{children}</form>
}

export default Form
