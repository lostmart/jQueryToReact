import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	firstName: '',
	lastName: '',
	dateBirth: '',
	startDate: '',
}

export const formSlice = createSlice({
	name: 'formData',
	initialState,
	reducers: {
		createUser: (state, action) => {
			state.firstName = action.payload.firstName
			state.lastName = action.payload.lastName
			state.dateBirth = action.payload.dateBirth
			state.startDate = action.payload.startDate
		},
	},
})

export const { createUser } = formSlice.actions

export default formSlice.reducer
