import React from 'react'
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa'

const TableHeaders = ({ headers, onClick, sortKey, reversed }) => {
	const RenderHeaders = () => {
		const handleClick = (val) => {
			if (val === sortKey) {
				onClick({ val, active: !reversed.active })
			} else {
				onClick({ val, active: false })
			}
		}

		const RenderSorted = ({ header }) => {
			if (sortKey === header.key && !reversed.active)
				return <FaSortDown style={{ transform: 'translateY(-2px)' }} />
			if (sortKey === header.key && reversed.active)
				return <FaSortUp style={{ transform: 'translateY(3px)' }} />
			if (sortKey) return <FaSort style={{ transform: 'translateY(1px)' }} />
		}

		return headers.map((header) => {
			return (
				<th
					onClick={() => handleClick(header.key)}
					key={header.key}
					className={sortKey === header.key ? 'active-data' : null}>
					{header.label}

					<RenderSorted header={header} />
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
