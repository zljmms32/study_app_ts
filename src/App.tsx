import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DashboardPage from './components/dashboard/DashboardPage'
import WelcomePage from './components/welcome/WelcomePage'
import StudentsPage from './components/student/StudentsPage'
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
			<Route path='/dashboard/:studentId' component={DashboardPage} />
			<UserRoute exact path='/students' component={StudentsPage} />
		</Router>
	)
}

export default App
