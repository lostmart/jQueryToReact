import React from 'react'
import dateFormatter from '../../utils/dateFormatter'

const TableBody = ({ data, sortKey }) => {
	// console.log(data)
	const RenderData = () => {
		return data.map((user, indx) => {
			return (
				<tr key={indx}>
					<td className={sortKey === 'firstName' ? 'active-data' : null}>
						{user.firstName}
					</td>
					<td className={sortKey === 'lastName' ? 'active-data' : null}>
						{user.lastName}
					</td>
					<td className={sortKey === 'startDate' ? 'active-data' : null}>
						{dateFormatter(user.startDate)}
					</td>
					<td className={sortKey === 'department' ? 'active-data' : null}>
						{user.department}
					</td>
					<td className={sortKey === 'birthDate' ? 'active-data' : null}>
						{dateFormatter(user.dateBirth)}
					</td>
					<td className={sortKey === 'street' ? 'active-data' : null}>
						{user.street}
					</td>
					<td className={sortKey === 'city' ? 'active-data' : null}>
						{user.cityData}
					</td>
					<td className={sortKey === 'state' ? 'active-data' : null}>
						{user.state}
					</td>
					<td className={sortKey === 'zipCode' ? 'active-data' : null}>
						{user.zipData}
					</td>
				</tr>
			)
		})
	}
	return (
		<tbody>
			<RenderData />
		</tbody>
	)
}

export default TableBody
