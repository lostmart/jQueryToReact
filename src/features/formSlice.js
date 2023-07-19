import { createSlice } from '@reduxjs/toolkit'
import { userMockData } from '../data/usersMockData'

/* mockdata   */
const initialState = userMockData

//const initialState = []

export const formSlice = createSlice({
	name: 'formData',
	initialState,
	reducers: {
		createUser: (state, action) => [...state, action.payload],
	},
})

export const { createUser } = formSlice.actions

export default formSlice.reducer
