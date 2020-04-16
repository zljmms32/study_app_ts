import React from 'react'
import ProgressRing from '../../../ProgressRing'

type Props = {
    item: Project
}

const ProjectCard: React.FC<Props> = ({ item }) => {
    return (
        <div className='shadow-sm d-flex bg-white rounded-lg align-items-center justify-content-start m-1'>
            <div className='px-2'>
                <ProgressRing progress={item.progress} />
            </div>

            <div className='d-flex flex-column px-0 justify-content-around align-items-start overflow-hidden'>
                <div className='mb-1 font-weight-bold h6 text-truncate w-100'>
                    {item.title}
                </div>
                <div className='text-muted mb-1 h6 text-truncate w-100'>
                    {item.subject}
                </div>
                <div className='text-muted small text-truncate w-100'>
                    {item.createdTime}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
