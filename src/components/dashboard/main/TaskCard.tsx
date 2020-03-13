import React from 'react'

const TaskCard: React.FC = () => {
	return (
		<div
			style={{ fontSize: '0.3rem' }}
			className='shadow-sm bg-white rounded-lg m-1 d-flex align-items-center justify-content-around'
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
				<div className='px-1 font-weight-bold'>Art</div>
				<div className='px-1 small text-muted'>Charpter II</div>
			</div>
			<div>
				<div className='px-1 font-weight-bold'>Craft Assignment</div>
				<div className='px-1 small text-muted'>illustration</div>
			</div>
			<div>
				<div className='px-1 font-weight-bold'>12:45pm</div>
				<div className='px-1 small text-muted'>Today</div>
			</div>
			<div>
				<div className='px-1 font-weight-bold'>Finished</div>
				<div className='px-1 small text-muted'>Yestoday</div>
			</div>
		</div>
	)
}

export default TaskCard
