import { useState, useEffect } from 'react'
import TableHeaders from '../molecules/TableHeaders'
import TableBody from '../molecules/TableBody'
import sortedData from '../../utils/dataSorter'
import Pagination from './Pagination'
import PaginationLegend from '../molecules/PaginationLegend'

const Table = ({ users, inputValue, entriesPerPage }) => {
	const [currentPage, setCurrentPage] = useState(1)

	/* searchInput  */
	const handleSearchInput = () => {
		const filteredUsers = users.filter((user) =>
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
	const pagData = filteredSortedData.slice(firstUserIndex, lastUserIndex)

	const handlePageChange = (page) => {
		setCurrentPage(() => page)
		setFilteredSortedData(() => {
			return filteredSortedData.slice(firstUserIndex, lastUserIndex)
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
					data={sortedData(pagData, sortKey, reversed.active)}
					sortKey={sortKey}
					reversed={reversed}
				/>
			</table>
			<PaginationLegend
				paginationData={{
					firstUserIndex,
					entriesPerPage,
					currentPage,
					pagData,
					totalUsers: users,
				}}
			/>
			<Pagination
				totalUsers={filteredSortedData.length}
				usersPerPage={entriesPerPage}
				setCurrentPage={handlePageChange}
				currentPage={currentPage}
			/>
		</>
	)
}

export default Table
