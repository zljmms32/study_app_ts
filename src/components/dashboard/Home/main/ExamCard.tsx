import React from 'react'

type ExamCardProps = {
    item: Exam
}

const ExamCard: React.FC<ExamCardProps> = ({ item }) => {
    return (
        <div className='row bg-white shadow-sm m-1 p-3 rounded d-flex align-items-center justify-content-between'>
            <span>{item.subject}</span>
            <span>{item.location}</span>
            <span>{item.day}</span>
            <span>{item.time}</span>
        </div>
    )
}

export default ExamCard
