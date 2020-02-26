import React from 'react'
import ProjectStatistic from './ProjectStatistic'
import Inbox from './Inbox'
import Task from './Task'
import ExamSchedule from './ExamSchedule'

const DashboardMain: React.FC = () => {
	return (
		<div className='container w-75'>
			<ProjectStatistic />
			<Inbox />
			<Task />
			<ExamSchedule />
		</div>
	)
}

export default DashboardMain
