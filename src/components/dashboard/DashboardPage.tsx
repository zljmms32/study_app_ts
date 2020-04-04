import React from 'react'
import { Switch, Route, useParams } from 'react-router-dom'
import DashboardNav from './nav/DashboardNav'
import Home from './Home'
import Task from './Task'

const DashboardPage: React.FC = () => {
	const params = useParams<{ studentId: string }>()
	return (
		<div className='container-fluid mx-auto px-0 min-vw-100 min-vh-100 d-flex flex-column align-items-center'>
			<DashboardNav />
			<div className='container-fluid row mt-2' style={{ height: '90%' }}>
				<Switch>
					<Route path={`/dashboard/${params.studentId}/home`}>
						<Home />
					</Route>
					<Route path={`/dashboard/${params.studentId}/task`}>
						<Task studentId={params.studentId} />
					</Route>
				</Switch>
			</div>
		</div>
	)
}

export default DashboardPage
