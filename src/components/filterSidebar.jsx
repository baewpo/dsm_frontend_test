import React, { useState, useEffect } from "react"
import "./filterSidebar.css"

const FilterSidebar = () => {
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

	const toggleSubMenu = () => {
		setIsSubMenuOpen((prev) => !prev)
	}

	const handleKeyDown = (event) => {
		if (event.key === "v" || event.key === "V") {
			toggleSubMenu()
		}
	}

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown)

		return () => {
			window.removeEventListener("keydown", handleKeyDown)
		}
	}, [])

	return (
		<div className="filter-sidebar">
			<label className="filter-label">Filter</label>
			<div className="filter-menu">
				<div className={`filter-menu-item ${isSubMenuOpen ? "open" : ""}`} onClick={toggleSubMenu}>
					Filter Category 1 <i className={`fas fa-chevron-${isSubMenuOpen ? "up" : "down"}`} />
				</div>
				{isSubMenuOpen && (
					<div className="sub-menu">
						<div className="sub-menu-item">Submenu Item 1</div>
						<div className="sub-menu-item">Submenu Item 2</div>
						<div className="sub-menu-item">Submenu Item 3</div>
					</div>
				)}
				<div className="filter-menu-item">Filter Category 2</div>
				<div className="filter-menu-item">Filter Category 3</div>
			</div>
		</div>
	)
}

export default FilterSidebar
