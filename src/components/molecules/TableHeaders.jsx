import React from 'react'
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa'

const TableHeaders = ({ headers }) => {
	const RenderHeaders = () => {
		return headers.map((header) => {
			return <th>{header.toUpperCase()} <FaSort /></th>
		})
	}
	return (
		<thead>
			<tr>
				{/* <th style={{ cursor: 'pointer' }}>
					First Name <FaSort style={{ transform: 'translateY(3px)' }} />
				</th> */}
				<RenderHeaders />
			</tr>
		</thead>
	)
}

export default TableHeaders
