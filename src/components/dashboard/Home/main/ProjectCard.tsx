import React from 'react'
import ProgressRing from '../../../ProgressRing'

const ProjectCard: React.FC = () => {
	return (
		<div className='shadow-sm d-flex bg-white rounded-lg align-items-center justify-content-start m-1'>
			<div className='px-2'>
				<ProgressRing progress={75} />
			</div>

			<div className='d-flex flex-column px-0 justify-content-around align-items-start overflow-hidden'>
				<div className='mb-1 font-weight-bold h6 text-truncate w-100'>
					Project Frog Surgery
				</div>
				<div className='text-muted mb-1 h6 text-truncate w-100'>
					Biology
				</div>
				<div className='text-muted small text-truncate w-100'>
					project collected in 12 August 2019
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
