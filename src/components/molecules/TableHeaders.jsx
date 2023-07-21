import React from 'react'
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa'

const TableHeaders = ({ headers, onClick, sortKey }) => {
	const RenderHeaders = () => {
		const handleClick = (val) => {
			onClick(val)
		}
		return headers.map((header) => {
			return (
				<th
					onClick={() => handleClick(header.key)}
					key={header.key}
					className={sortKey === header.key ? 'active-data' : null}>
					{header.label}

					<FaSort style={{ transform: 'translateY(1px)' }} />
				</th>
			)
		})
	}

	return (
		<thead>
			<tr className="table-headers">
				<RenderHeaders />
			</tr>
		</thead>
	)
}

export default TableHeaders
