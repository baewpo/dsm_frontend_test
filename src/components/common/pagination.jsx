import React from "react"
import "./pagination.css"

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
	const totalPages = Math.ceil(totalItems / itemsPerPage)

	const handlePrevious = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1)
		}
	}

	const handleNext = () => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1)
		}
	}

	const handlePageClick = (page) => {
		onPageChange(page)
	}

	return (
		<div className="pagination">
			<button className="pagination-btn" onClick={handlePrevious} disabled={currentPage === 1}>
				{"<"}
			</button>
			{Array.from({ length: totalPages }, (_, index) => {
				const page = index + 1
				return (
					<button
						key={page}
						className={`pagination-btn ${currentPage === page ? "active" : ""}`}
						onClick={() => handlePageClick(page)}>
						{page}
					</button>
				)
			})}
			<button className="pagination-btn" onClick={handleNext} disabled={currentPage === totalPages}>
				{">"}
			</button>
		</div>
	)
}

export default Pagination
