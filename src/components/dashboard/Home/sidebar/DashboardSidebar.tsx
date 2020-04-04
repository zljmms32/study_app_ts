import React from 'react'
import Calendar from '../../../calendar'
import TodaySchedule from './TodaySchedule'

const DashboardSidebar: React.FC = () => {
	return (
		<div className='col-lg-3 col-md-12'>
			<Calendar />
			<TodaySchedule />
		</div>
	)
}

export default DashboardSidebar
