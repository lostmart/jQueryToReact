import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Table from '../components/organisms/Table'
import SearchInput from '../components/molecules/SearchInput'

const Empleyees = () => {


	const users = useSelector((state) => state.formSlice)	

	const [inputValue, setInput] = useState('')

	const CheckUsersRender = () => {
		return users.length > 0 ? (
			<Table users={users} inputValue={inputValue} />
		) : (
			<h2>No users found</h2>
		)
	}

	const handleInputChange = (val) => {
		setInput(() => val)
	}

	/*  form parts   */
	const searchData = {
		label: {
			text: 'Search',
		},
		input: {
			type: 'text',
			id: 'search',
		},
	}

	return (
		<div className="container">
			<h1>Current Employees</h1>
			<SearchInput
				groupData={searchData}
				onChange={handleInputChange}
				inputValue={inputValue}
			/>
			<div className="table-container">
				<div className="table-viewer">
					<CheckUsersRender />
				</div>
			</div>
			<Link to="/" className="btn">
				Home
			</Link>
		</div>
	)
}

export default Empleyees
