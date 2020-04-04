import React, { useState, useContext } from 'react'
import Nav from '../Nav'
import StudentCard from './StudentCard'
import AddStudent from './AddStudent'
import HeaderMessage from '../messages/HeaderMessage'
import { Context } from '../context/Context'
import { AxiosPromise } from 'axios'

const StudentsPage: React.FC = () => {
	const [modalShow, setModalShow] = useState<boolean>(false)

	const { students, addStudent, getStudents, user } = useContext(Context)

	React.useLayoutEffect(() => {
		getStudents(user.userId as string)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleClick = (): void => {
		setModalShow(true)
	}

	const handleSubmit = (student: StudentInfo): Promise<void | AxiosPromise> =>
		addStudent(student)

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
					<HeaderMessage text='Please add students!' />
				) : (
					students.map(student => (
						<StudentCard student={student} key={student._id} />
					))
				)}
				<AddStudent
					show={modalShow}
					onHide={(): void => setModalShow(false)}
					submit={handleSubmit}
				/>
			</div>
		</div>
	)
}

export default StudentsPage
