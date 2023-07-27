import React, { useState, useEffect } from 'react'

const PaginationLegend = ({ paginationData }) => {
	const firstUserIndex = paginationData.firstUserIndex + 1
	const { pagData } = paginationData
	const { entriesPerPage } = paginationData
	const { currentPage } = paginationData
	const { totalUsers } = paginationData

	const [entriesShown, setentriesShown] = useState(entriesPerPage)
	// console.log(entriesPerPage, pagData.length)

	useEffect(() => {
		if (entriesPerPage > pagData.length) {
			setentriesShown(pagData.length)
		} else {
			setentriesShown(entriesPerPage)
		}
	})

	return (
		<div>
			{`Showing ${firstUserIndex} to ${entriesShown * currentPage} of
			${totalUsers.length} entries`}
		</div>
	)
}

export default PaginationLegend
