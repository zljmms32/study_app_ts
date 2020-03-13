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
	const { user } = useContext(Context)

	return (
		<Route
			{...rest}
			render={(props): React.ReactElement =>
				Object.keys(user).length > 0 ? (
					<Component {...props} />
				) : (
					<Redirect to='/index' />
				)
			}
		/>
	)
}

export default UserRoute
