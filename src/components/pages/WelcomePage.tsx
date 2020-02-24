import React, { useContext } from 'react'
import SigninForm from '../forms/SigninForm'
import SignupForm from '../forms/SignupForm'
import { AxiosPromise } from 'axios'
import { History } from 'history'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
import Nav from '../navs/Nav'
import { Context } from '../context/Context'

type Welcome = {
	history: History
}

const WelcomePage: React.FC<Welcome> = ({ history }) => {
	const { signin, signup } = useContext(Context)
	const { path, url } = useRouteMatch()

	const signInSubmit = (data: UserInfo): Promise<void | AxiosPromise> =>
		signin(data).then(() => history.push('/students'))

	const signUpSubmit = (data: UserInfo): Promise<void | AxiosPromise> =>
		signup(data).then(() => history.push('/students'))

	return (
		<div className='container vh-100 d-flex flex-column align-items-center'>
			<Nav url={url} />
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
