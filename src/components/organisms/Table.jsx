import { useState, useEffect } from 'react'
import TableHeaders from '../molecules/TableHeaders'
import TableBody from '../molecules/TableBody'
import sortedData from '../../utils/dataSorter'
import Pagination from './Pagination'

const Table = ({ users, inputValue, entriesPerPage }) => {
	const [currentPage, setCurrentPage] = useState(1)

	const handleSearchInput = () => {
		const filteredUsers = pagData.filter((user) =>
			keys.some((key) =>
				user[key].toLowerCase().includes(inputValue.toLowerCase())
			)
		)
		setFilteredSortedData(() => {
			return filteredUsers
		})
	}

	const lastUserIndex = currentPage * entriesPerPage
	const firstUserIndex = lastUserIndex - entriesPerPage

	useEffect(() => {
		handleSearchInput()
	}, [inputValue, currentPage])

	const [sortKey, setSortKey] = useState('firstName')
	const [reversed, setReversed] = useState({ val: 'firstName', active: false })
	const [filteredSortedData, setFilteredSortedData] = useState([])

	const headers = [
		{
			key: 'firstName',
			label: 'First Name',
		},
		{
			key: 'lastName',
			label: 'Last Name',
		},
		{
			key: 'startDate',
			label: 'Start Date',
		},
		{
			key: 'department',
			label: 'Department',
		},
		{
			key: 'dateBirth',
			label: 'Birth Date',
		},
		{
			key: 'street',
			label: 'Street',
		},
		{
			key: 'cityData',
			label: 'City',
		},
		{
			key: 'state',
			label: 'State',
		},
		{
			key: 'zipCode',
			label: 'Zip Code',
		},
	]

	const handleHeaderClick = (payload) => {
		setSortKey(payload.val)
		setReversed({
			...reversed,
			active: payload.active,
		})
	}

	const keys = [
		'firstName',
		'lastName',
		'department',
		'street',
		'cityData',
		'state',
	]

	/* paginated data  */
	const pagData = users.slice(firstUserIndex, lastUserIndex)

	const handlePageChange = (page) => {
		setCurrentPage(() => page)
		setFilteredSortedData(() => {
			return users.slice(firstUserIndex, lastUserIndex)
		})
	}

	return (
		<>
			<table>
				<TableHeaders
					headers={headers}
					onClick={handleHeaderClick}
					sortKey={sortKey}
					reversed={reversed}
				/>
				<TableBody
					data={sortedData(filteredSortedData, sortKey, reversed.active)}
					sortKey={sortKey}
					reversed={reversed}
				/>
			</table>
			<div>
				Showing {firstUserIndex + 1} to{' '}
				{entriesPerPage < users.length
					? entriesPerPage * currentPage
					: users.length + 1}
				{` of ${users.length + 1} entries`}
			</div>
			<Pagination
				totalUsers={users.length}
				usersPerPage={entriesPerPage}
				setCurrentPage={handlePageChange}
				currentPage={currentPage}
			/>
		</>
	)
}

export default Table
