import React from 'react'
import BoardTemplate from '../../BoardTemplate'
import ProjectCard from './ProjectCard'

const ProjectStatistic: React.FC = () => {
    const items = [
        {
            _id: '3',
            title: 'Project Frog Surgery',
            subject: 'Biology',
            createdTime: 'project collected in 12 August 2019',
            progress: 75,
        },
        {
            _id: '4',
            title: 'Project Frog Surgery',
            subject: 'Biology',
            createdTime: 'project collected in 12 August 2019',
            progress: 60,
        },
    ]
    return (
        <BoardTemplate
            boardName='Project Statistic'
            component={ProjectCard}
            items={items}
        />
    )
}

export default ProjectStatistic
