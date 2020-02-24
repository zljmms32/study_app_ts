import React from 'react'
import { Link } from 'react-router-dom'

type StudentCardProps = {
	student: StudentInfo
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
	const { studentName, grade, age, _id } = student
	return (
		<div className='card'>
			<img
				src='https://picsum.photos/200'
				className='card-img-top'
				alt='...'
			/>
			<div className='card-body'>
				<h5 className='card-title'>{studentName}</h5>
				<p className='card-text'>Age: {age}</p>
				<p className='card-text'>Grade: {grade}</p>
				<Link to={`/dashboard/${_id}`} className='btn btn-primary'>
					Go to dashboard
				</Link>
			</div>
		</div>
	)
}

export default StudentCard
