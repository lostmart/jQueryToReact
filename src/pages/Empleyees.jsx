import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Table from '../components/organisms/Table'
import SearchInput from '../components/molecules/SearchInput'
import sortedData from '../utils/dataSorter'

const Empleyees = () => {
	const users = useSelector((state) => state.formSlice)

	const [inputValue, setInput] = useState('')
	const [entriesPerPage, setEntriesPerPage] = useState('15')

	const CheckUsersRender = () => {
		return users.length > 0 ? (
			<Table
				users={sortedData(users, 'firstName', false)}
				inputValue={inputValue}
				entriesPerPage={entriesPerPage}
			/>
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
			<div className="legend-container">
				<div className="entries-legend">
					Show
					<select onChange={(event) => setEntriesPerPage(event.target.value)}>
						<option value="15">15</option>
						<option value="50">50</option>
						<option value="100">100</option>
					</select>
					entries
				</div>
				<SearchInput
					groupData={searchData}
					onChange={handleInputChange}
					inputValue={inputValue}
				/>
			</div>
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
