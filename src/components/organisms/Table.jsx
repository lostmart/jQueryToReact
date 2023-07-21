import { useState } from 'react'
import TableHeaders from '../molecules/TableHeaders'
import TableBody from '../molecules/TableBody'
import sortedData from '../../utils/dataSorter'

const Table = ({ users }) => {
	const [sortKey, setSortKey] = useState('firstName')

	const handleHeaderClick = (val) => {
		setSortKey(val)
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
			/>
			<TableBody data={sortedData(users, sortKey)} sortKey={sortKey} />
		</table>
	)
}

export default Table
