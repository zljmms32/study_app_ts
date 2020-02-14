import React from 'react'
import SigninForm from '../forms/SigninForm'
import SignupForm from '../forms/SignupForm'
import { user } from '../../api'
import { AxiosPromise } from 'axios'
import { History } from 'history'
import { Switch, Route, Link, useRouteMatch, Redirect } from 'react-router-dom'

type Welcome = {
	history: History
}

const WelcomePage: React.FC<Welcome> = ({ history }) => {
	const { path, url } = useRouteMatch()

	const signInSubmit = (data: UserInfo): Promise<void | AxiosPromise> =>
		user.signin(data).then(() => history.push('/dashboard'))

	const signUpSubmit = (data: UserInfo): Promise<void | AxiosPromise> =>
		user.signup(data).then(() => history.push('/dashboard'))

	return (
		<div className='container vh-100 d-flex flex-column align-items-center'>
			<div className='container d-flex align-items-center'>
				<h1 className='text-lg mb-0 flex-grow-1'>
					Welcome to Study App
				</h1>
				<Link className='btn btn-primary btn-sm' to={`${url}/signin`}>
					Sign In
				</Link>
				<Link
					className='btn btn-primary btn-sm ml-2'
					to={`${url}/signup`}
				>
					Sign Up
				</Link>
			</div>
			<div className='container flex-grow-1'>
				<Switch>
					<Route
						exact
						path={`${path}/signin`}
						render={(props): React.ReactElement => (
							<SigninForm {...props} submit={signInSubmit} />
						)}
					/>
					<Route
						exact
						path={`${path}/signup`}
						render={(props): React.ReactElement => (
							<SignupForm {...props} submit={signUpSubmit} />
						)}
					/>
					<Route path='/index'>
						<Redirect to={`${path}/signin`} />
					</Route>
				</Switch>
			</div>
		</div>
	)
}

export default WelcomePage
