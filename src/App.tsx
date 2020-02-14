import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DashboardPage from './components/pages/DashboardPage'
import WelcomePage from './components/pages/WelcomePage'

const App: React.FC = () => {
	return (
		<Router>
			<Route
				path='/index'
				render={(props): React.ReactElement => (
					<WelcomePage {...props} />
				)}
			/>
			<Route exact path='/dashboard' component={DashboardPage} />
		</Router>
	)
}

export default App
