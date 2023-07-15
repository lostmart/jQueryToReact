import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
// 	city: '',
// 	department: '',
// 	firstName: '',
// 	lastName: '',
// 	dateBirth: '',
// 	startDate: '',
// 	state: '',
// 	street: '',
// 	zipCode: '',
// }

const initialState = []

export const formSlice = createSlice({
	name: 'formData',
	initialState,
	reducers: {
		createUser: (state, action) => [...state, action.payload]
	},
})

export const { createUser } = formSlice.actions

export default formSlice.reducer
