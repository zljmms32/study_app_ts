import React from 'react'
import BoardTemplate from '../../BoardTemplate'
import ExamCard from './ExamCard'

const ExamSchedule: React.FC = () => {
	return <BoardTemplate boardName='Exam Schedule' component={ExamCard} />
}

export default ExamSchedule
