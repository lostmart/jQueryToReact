import { useState, useEffect } from 'react'
import TableHeaders from '../molecules/TableHeaders'
import TableBody from '../molecules/TableBody'
import sortedData from '../../utils/dataSorter'

const Table = ({ users, inputValue }) => {
	useEffect(() => {
		handleSearchInput()
	}, [inputValue])

	const [sortKey, setSortKey] = useState('firstName')
	const [reversed, setReversed] = useState({ val: 'firstName', active: false })
	const [filteredSortedData, setFilteredSortedData] = useState(null)

	const handleHeaderClick = (payload) => {
		setSortKey(payload.val)
		setReversed({
			...reversed,
			active: payload.active,
		})
	}

	const handleSearchInput = () => {
		console.log(inputValue, sortedData(users, sortKey, reversed.active))
	}

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
			key: 'birthDate',
			label: 'Birth Date',
		},
		{
			key: 'street',
			label: 'Street',
		},
		{
			key: 'city',
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

	return (
		<table>
			<TableHeaders
				headers={headers}
				onClick={handleHeaderClick}
				sortKey={sortKey}
				reversed={reversed}
			/>
			<TableBody
				data={sortedData(users, sortKey, reversed.active)}
				sortKey={sortKey}
				reversed={reversed}
			/>
		</table>
	)
}

export default Table
