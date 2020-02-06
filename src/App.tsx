import React, { useState, MouseEvent } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DashboardPage from './components/pages/DashboardPage'
import WelcomePage from './components/pages/WelcomePage'

const App: React.FC = () => {
	const [signin, setSignin] = useState<boolean>(true)

	const onClick = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault()
		setSignin((preStatus: boolean): boolean => !preStatus)
	}

	return (
		<div className='container vh-100'>
			<Router>
				<div>
					<h1 className='text-center'>Typescript in React</h1>
					<button
						className='btn btn-primary btn-sm float-right'
						onClick={onClick}
					>
						{signin ? 'Sign In' : 'Sign Up'}
					</button>
				</div>

				<Route
					exact
					path='/login'
					render={(props): React.ReactElement => (
						<WelcomePage {...props} signin={signin} />
					)}
				/>
				<Route exact path='/dashboard' component={DashboardPage} />
			</Router>
		</div>
	)
}

export default App
