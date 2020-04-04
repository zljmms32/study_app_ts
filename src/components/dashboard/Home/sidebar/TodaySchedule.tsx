import React from 'react'
import ScheduleCard from './ScheduleCard'

const TodaySchedule: React.FC = () => {
	return (
		<div className='container px-0'>
			<span className='font-weight-bold'>TodaySchedule</span>
			<div className='container px-0'>
				<ScheduleCard
					subject={'Physics'}
					chapter={4}
					work={'Class'}
					location={'classroom'}
				/>
				<ScheduleCard
					subject={'Physics'}
					chapter={4}
					work={'Class'}
					location={'classroom'}
				/>
				<ScheduleCard
					subject={'Physics'}
					chapter={4}
					work={'Class'}
					location={'classroom'}
				/>
				<ScheduleCard
					subject={'Physics'}
					chapter={4}
					work={'Class'}
					location={'classroom'}
				/>
				<ScheduleCard
					subject={'Physics'}
					chapter={4}
					work={'Class'}
					location={'classroom'}
				/>
				<ScheduleCard
					subject={'Physics'}
					chapter={4}
					work={'Class'}
					location={'classroom'}
				/>
			</div>
		</div>
	)
}

export default TodaySchedule
