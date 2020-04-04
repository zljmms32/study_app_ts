import React from 'react'

const TaskCard: React.FC = () => {
	return (
		<div
			style={{ fontSize: '0.8rem' }}
			className='shadow-sm bg-white rounded-lg m-1 d-flex align-items-center justify-content-around p-2'
		>
			<div
				style={{
					height: '0.4rem',
					width: '0.4rem',
					display: 'inline-block',
					borderRadius: '50%',
					backgroundColor: 'skyblue',
				}}
			></div>
			<div>
				<div className='font-weight-bold'>Art</div>
				<div className='small text-muted'>Charpter II</div>
			</div>
			<div>
				<div className='font-weight-bold'>Craft Assignment</div>
				<div className='small text-muted'>illustration</div>
			</div>
			<div>
				<div className='font-weight-bold'>12:45pm</div>
				<div className='small text-muted'>Today</div>
			</div>
			<div>
				<div className='font-weight-bold'>Finished</div>
				<div className='small text-muted'>Yestoday</div>
			</div>
		</div>
	)
}

export default TaskCard
