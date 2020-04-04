import React from 'react'

// type ExamCardProps = {
// 	subject: string
// 	location: string
// 	day: string
// 	time: string
// }

const ExamCard: React.FC = () => {
	return (
		<div className='row bg-white shadow-sm m-1 p-3 rounded d-flex align-items-center justify-content-between'>
			<span>Physics</span>
			<span>Classroom One</span>
			<span>Tue</span>
			<span>8:00 AM</span>
		</div>
	)
}

export default ExamCard
