import React from 'react'
import { Switch, Route, useParams } from 'react-router-dom'
import DashboardNav from './nav/DashboardNav'
import Home from './Home'
import Task from './Task'
import { Context } from '../context/Context'
import Schedule from './Schedule'

const DashboardPage: React.FC = () => {
	const { getTasks } = React.useContext(Context)
	const params = useParams<{ studentId: string }>()

	React.useLayoutEffect(() => {
		getTasks(params.studentId)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className='container-fluid mx-auto px-0 min-vw-100 min-vh-100 d-flex flex-column align-items-center'>
			<DashboardNav />
			<div
				className='container-fluid row m-0 mt-2 p-0'
				style={{ height: '90%' }}
			>
				<Switch>
					<Route path={`/dashboard/${params.studentId}/home`}>
						<Home />
					</Route>
					<Route path={`/dashboard/${params.studentId}/task`}>
						<Task studentId={params.studentId} />
					</Route>
					<Route path={`/dashboard/${params.studentId}/schedule`}>
						<Schedule />
					</Route>
				</Switch>
			</div>
		</div>
	)
}

export default DashboardPage
