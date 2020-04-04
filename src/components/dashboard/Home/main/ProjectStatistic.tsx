import React from 'react'
import BoardTemplate from '../../BoardTemplate'
import ProjectCard from './ProjectCard'

const ProjectStatistic: React.FC = () => {
	return (
		<BoardTemplate boardName='Project Statistic' component={ProjectCard} />
	)
}

export default ProjectStatistic
