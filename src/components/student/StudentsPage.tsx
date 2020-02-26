import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from '../Nav'
import StudentCard from './StudentCard'
import Dashboard from '../dashboard/DashboardPage'
import AddStudent from './AddStudent'
import { student } from '../../api'
import HeaderMessage from '../messages/HeaderMessage'

const StudentsPage: React.FC = () => {
	const [modalShow, setModalShow] = useState<boolean>(false)

	const [students, setStudents] = useState<StudentInfo[]>([])

	const handleClick = (): void => {
		setModalShow(true)
	}

	useEffect(() => {
		async function allStudents(): Promise<void> {
			const students = await student.all()
			setStudents(students)
		}
		allStudents()
	}, [])

	return (
		<div className='container min-vh-100 d-flex flex-column align-items-center'>
			<Nav url={'index'} />
			<div className='container my-3'>
				<button
					type='button'
					className='btn btn-primary'
					onClick={handleClick}
				>
					<i className='fa fa-plus-circle' aria-hidden='true'></i>
					Add Student
				</button>
			</div>
			<div className='container flex-grow-1 d-flex align-items-start flex-wrap'>
				{students.length === 0 ? (
					<HeaderMessage text={'Please add students!'} />
				) : (
					students.map(student => (
						<StudentCard student={student} key={student._id} />
					))
				)}
				<AddStudent
					show={modalShow}
					onHide={(): void => setModalShow(false)}
					submit={(student: StudentInfo): void =>
						setStudents([...students, student])
					}
				/>
			</div>

			<Switch>
				<Route path={`/dashboard/:studentId`}>
					<Dashboard />
				</Route>
			</Switch>
		</div>
	)
}

export default StudentsPage
