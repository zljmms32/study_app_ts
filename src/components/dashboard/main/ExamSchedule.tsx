import React from 'react'
import ProjectCard from './ProjectCard'
import BoardTemplate from './BoardTemplate'

const ExamSchedule: React.FC = () => {
	return <BoardTemplate boardName='Exam Schedule' component={ProjectCard} />
}

export default ExamSchedule
