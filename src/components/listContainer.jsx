import React, { useState } from "react"
import "./listContainer.css"
import Pagination from "./common/pagination"

const ListContainer = () => {
	const [isSorted, setIsSorted] = useState(false)
	const [data, setData] = useState([
		"Item 1",
		"Item 2",
		"Item 3",
		"Item 4",
		"Item 5",
		"Item 6",
		"Item 7",
		"Item 8",
		"Item 9",
		"Item 10",
		"Item 11",
		"Item 12",
		"Item 13",
		"Item 14",
		"Item 15",
	])
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 8

	const toggleSort = () => {
		setIsSorted((prev) => !prev)
		setData((prevData) => [...prevData].reverse())
	}

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber)
	}

	const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

	return (
		<div className="list-container">
			<div className="list-controller">
				<label className="list-label">Data</label>
				<button className="sort-btn" onClick={toggleSort}>
					Sort by <i className={`fas fa-caret-${isSorted ? "up" : "down"}`}></i>
				</button>
			</div>
			<ul className="list">
				{currentData.map((item, index) => (
					<li key={index} className="list-item">
						{item}
					</li>
				))}
			</ul>
			<Pagination
				totalItems={data.length}
				itemsPerPage={itemsPerPage}
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
		</div>
	)
}

export default ListContainer
