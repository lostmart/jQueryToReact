import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Table from '../components/organisms/Table'

const Empleyees = () => {
	const users = useSelector((state) => state.formSlice)
	const CheckUsersRender = () => {
		return users.length > 0 ? <Table users={users} /> : <h2>No users found</h2>
	}

	return (
		<div className="container">
			<h1>Current Employees</h1>
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
