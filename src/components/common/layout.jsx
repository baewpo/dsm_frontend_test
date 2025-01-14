import React, { Fragment } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../navBar"
import './layout.css'

const Layout = () => {
	return (
		<Fragment>
			<Navbar />
			<div id="container">
				<Outlet />
			</div>
		</Fragment>
	)
}

export default Layout
