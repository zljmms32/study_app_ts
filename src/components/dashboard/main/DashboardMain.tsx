import React from 'react'
import ProjectStatistic from './ProjectStatistic'
import Inbox from './Inbox'
import Task from './Task'
import ExamSchedule from './ExamSchedule'

const DashboardMain: React.FC = () => {
	return (
		<div className='col-9'>
			<div className='row'>
				<ProjectStatistic />
				<Inbox />
			</div>
			<div className='row'>
				<Task />
				<ExamSchedule />
			</div>
		</div>
	)
}

export default DashboardMain
