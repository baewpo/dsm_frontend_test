import React, { useState } from "react"
import "./Navbar.css"

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen((prevState) => !prevState)
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
	}

	return (
		<nav className="navbar">
			<div className="navbar-left">
				<img
					src="https://lh4.googleusercontent.com/-82dEH82o1HiV27wA5XMqgBysxBQHj35tk7U5e389g1vbIbNLxGh7Ocj3kxw3jZLfid_uSoTrMXiABuL_xLDocU=w16383"
					className="logo"
				/>
			</div>
			{isMenuOpen && <div className="overlay"></div>}
			<div className={`menu-container ${isMenuOpen ? "open" : "close"}`}>
				<button className="close-btn" onClick={closeMenu}>
					<i className="fas fa-chevron-left"></i>
				</button>
				<ul className="menu">
					<li>
						<a className="menu-link" href="#">
							Menu 1
						</a>
					</li>
					<li>
						<a className="menu-link" href="#">
							Menu 2
						</a>
					</li>
					<li>
						<a className="menu-link" href="#">
							Menu 3
						</a>
					</li>
				</ul>
				<div className="search-container">
					<input type="text" className="search-box" placeholder="Search..." />
					<i className="fas fa-search search-icon"></i>
				</div>
			</div>
			<button onClick={toggleMenu} className="menu-toggle-btn">
				<i className="fas fa-bars" aria-hidden="true"></i>
			</button>
			<button className="search-button" onClick={toggleMenu}>
				<i className="fas fa-search"></i>
			</button>
			<div className="navbar-right">
				<button className="grip-button">
					<i className="fas fa-grip"></i>
				</button>
				<div className="user-avatar">A</div>
			</div>
		</nav>
	)
}

export default Navbar
