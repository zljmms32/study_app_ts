import React from 'react'
import BoardTemplate from '../../BoardTemplate'
import ExamCard from './ExamCard'

const ExamSchedule: React.FC = () => {
    const items = [
        {
            _id: 'e_1',
            subject: 'Biology',
            location: 'Classroom One',
            day: 'Sun',
            time: '8:00 am',
        },
        {
            _id: 'e_2',
            subject: 'Biology',
            location: 'Classroom One',
            day: 'Sun',
            time: '8:00 am',
        },
    ]
    return (
        <BoardTemplate
            boardName='Exam Schedule'
            component={ExamCard}
            items={items}
        />
    )
}

export default ExamSchedule
