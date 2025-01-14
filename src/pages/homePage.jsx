import FilterSidebar from "components/filterSidebar"
import React from "react"
import './homePage.css'
import ListContainer from "components/listContainer"

const HomePage = () => {
    return (
			<div id="homePage">
				<FilterSidebar />
                <ListContainer/>
			</div>
		)
}
export default HomePage