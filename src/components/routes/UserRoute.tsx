import React, { useContext } from 'react'
import {
	Route,
	Redirect,
	RouteComponentProps,
	RouteProps,
} from 'react-router-dom'
import { Context } from '../context/Context'

interface UserRouteProps extends RouteProps {
	component: React.ComponentType<RouteComponentProps>
}

const UserRoute: React.FC<UserRouteProps> = ({
	component: Component,
	...rest
}) => {
	const { state } = useContext(Context)

	return (
		<Route
			{...rest}
			render={(props): React.ReactElement =>
				!!state.user ? (
					<Component {...props} />
				) : (
					<Redirect to='/index' />
				)
			}
		/>
	)
}

export default UserRoute
