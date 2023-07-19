import React from 'react'
import TableHeaders from '../molecules/TableHeaders'
import TableBody from '../molecules/TableBody'

const Table = ({ users }) => {
	return (
		<table>
			<TableHeaders headers={Object.keys(users[0])} />
			<TableBody data={users} />
		</table>
	)
}

export default Table
