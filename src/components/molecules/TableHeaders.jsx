import React from 'react'
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa'

const TableHeaders = ({ headers }) => {
	const RenderHeaders = () => {
		return headers.map((header) => {
			return (
				<th key={header}>
					{header.toUpperCase()}
					<FaSort style={{ transform: 'translateY(1px)' }} />
				</th>
			)
		})
	}
	return (
		<thead>
			<tr>
				<RenderHeaders />
			</tr>
		</thead>
	)
}

export default TableHeaders
