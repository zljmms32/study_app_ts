import React from 'react'

type ScheduleCardProps = {
	subject: string
	chapter: number
	work: 'Class' | 'Lab 1'
	location: string
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({
	subject,
	chapter,
	work,
	location,
}) => {
	return (
		<div className='row d-flex shadow-sm bg-white rounded-lg m-1 align-items-center'>
			<span
				className='rounded-circle bg-primary text-center'
				style={{
					height: '2rem',
					width: '2rem',
					display: 'inline-block',
					borderRadius: '50%',
					backgroundColor: 'skyblue',
				}}
			>
				{'S'}
			</span>
			<div className='row d-inline-block ml-2'>
				<div className='col-12'>{subject}</div>
				<div className='col-12 text-muted'>{`Chapter ${chapter} · ${work} -> ${location}`}</div>
			</div>
		</div>
	)
}

export default ScheduleCard
