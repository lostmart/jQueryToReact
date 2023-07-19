import React from 'react'
import dateFormatter from '../../utils/dateFormatter'

const TableBody = ({ data }) => {
	console.log(data)
	const RenderData = () => {
		return data.map((user, indx) => {
			return (
				<tr key={indx}>
					<td>{user.cityData}</td>
					<td>{dateFormatter(user.dateBirth)}</td>
					<td>{user.department}</td>
					<td>{user.firstName}</td>
					<td>{user.lastName}</td>
					<td>{dateFormatter(user.startDate)}</td>
					<td>{user.state}</td>
					<td>{user.street}</td>
					<td>{user.zipData}</td>
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
