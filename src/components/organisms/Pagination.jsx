import React from 'react'

const Pagination = ({
	totalUsers,
	usersPerPage,
	setCurrentPage,
	currentPage,
}) => {
	let pages = []

	for (let i = 1; i < Math.ceil(totalUsers / usersPerPage) +1; i++) {
		pages.push(i)
	}
	console.log(currentPage)
	return (
		<div className="pagination-container">
			{pages.map((page) => {
				return (
					<button
						className={page === currentPage ? 'active-page' : ''}
						key={page}
						onClick={() => setCurrentPage(page)}>
						{page}
					</button>
				)
			})}
		</div>
	)
}

export default Pagination
