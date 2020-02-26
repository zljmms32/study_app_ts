import React from 'react'
import Calendar from './Calendar'
import TodaySchedule from './TodaySchedule'

const DashboardSidebar: React.FC = () => {
	return (
		<div className='container w-25'>
			<Calendar />
			<TodaySchedule />
		</div>
	)
}

export default DashboardSidebar
