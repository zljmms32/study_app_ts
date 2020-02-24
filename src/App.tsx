import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DashboardPage from './components/pages/DashboardPage'
import WelcomePage from './components/pages/WelcomePage'
import StudentsPage from './components/pages/StudentsPage'
import UserRoute from './components/routes/UserRoute'

const App: React.FC = () => {
	return (
		<Router>
			<Route
				path='/index'
				render={(props): React.ReactElement => (
					<WelcomePage {...props} />
				)}
			/>
			<Route
				exact
				path='/dashboard/:studentId'
				component={DashboardPage}
			/>
			<UserRoute exact path='/students' component={StudentsPage} />
		</Router>
	)
}

export default App
