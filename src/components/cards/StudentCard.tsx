import React from 'react'
import { Link } from 'react-router-dom'

type StudentCardProps = {
	student: StudentInfo
	key: number
}

const StudentCard: React.FC<StudentCardProps> = () => {
	return (
		<div className='card'>
			<img
				src='https://picsum.photos/200'
				className='card-img-top'
				alt='...'
			/>
			<div className='card-body'>
				<h5 className='card-title'>Card title</h5>
				<p className='card-text'>Some quick example text</p>
				<Link to={'/dashboard/aaaaa'} className='btn btn-primary'>
					Go somewhere
				</Link>
			</div>
		</div>
	)
}

export default StudentCard
