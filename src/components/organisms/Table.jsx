import React from 'react'
import TableHeaders from '../molecules/TableHeaders'
import TableBody from '../molecules/TableBody'

const Table = ({ users }) => {
	console.log(Object.keys(users[0]))
	return (
		<table>
			<TableHeaders headers={Object.keys(users[0])} />
			<TableBody />
		</table>
	)
}

export default Table
