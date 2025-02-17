import Layout from "components/common/layout"
import HomePage from "pages/homePage"
import React from "react"
import { Route, Routes } from "react-router-dom"

const Router = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/dsm_frontend_test/" element={<HomePage />} />
			</Route>
		</Routes>
	)
}

export default Router
