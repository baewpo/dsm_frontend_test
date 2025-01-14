import React from "react"
import { BrowserRouter } from "react-router-dom"
import Router from "./Router"
import './App.css'

function App() {

  return (
		<React.StrictMode>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</React.StrictMode>
  )
}

export default App
