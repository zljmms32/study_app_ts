import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DashboardPage from './components/pages/DashboardPage'
import LoginPage from './components/pages/LoginPage'

const App: React.FC = () => {
	return (
		<Router>
			<h1 className='text-center'>Typescript in React</h1>
			<Route exact path='/login' component={LoginPage} />
			<Route exact path='/dashboard' component={DashboardPage} />
		</Router>
	)
}

export default App
