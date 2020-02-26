import React from 'react'
import DashboardNav from './nav/DashboardNav'
import DashboardMain from './main/DashboardMain'
import DashboardSidebar from './sidebar/DashboardSidebar'

const DashboardPage: React.FC = () => {
	return (
		<div className='container mx-auto px-0 vw-100 vh-100 d-flex flex-column align-items-center'>
			<DashboardNav />
			<hr />
			<div className='container d-flex' style={{ height: '90%' }}>
				<DashboardMain />

				<DashboardSidebar />
			</div>
		</div>
	)
}

export default DashboardPage
