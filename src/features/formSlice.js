import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	city: '',
	department: '',
	firstName: '',
	lastName: '',
	dateBirth: '',
	startDate: '',
	state: '',
	street: '',
	zipCode: '',
}

export const formSlice = createSlice({
	name: 'formData',
	initialState,
	reducers: {
		createUser: (state, action) => {
			state.city = action.payload.cityData
			state.department = action.payload.department
			state.firstName = action.payload.firstName
			state.lastName = action.payload.lastName
			state.dateBirth = action.payload.dateBirth
			state.startDate = action.payload.startDate
			state.state = action.payload.state
			state.street = action.payload.street
			state.zipCode = action.payload.zipData
		},
	},
})

export const { createUser } = formSlice.actions

export default formSlice.reducer
