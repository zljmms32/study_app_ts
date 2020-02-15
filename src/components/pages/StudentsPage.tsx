import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from '../navs/Nav'
import StudentCard from '../cards/StudentCard'
import Dashboard from '../pages/DashboardPage'
import AddStudent from '../modals/AddStudent'

const StudentsPage: React.FC = () => {
	const [modalShow, setModalShow] = useState(false)

	const handleClick = (): void => {
		setModalShow(true)
	}

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
				<StudentCard />
				<StudentCard />
				<StudentCard />
			</div>
			<AddStudent
				show={modalShow}
				onHide={(): void => setModalShow(false)}
			/>
			<Switch>
				<Route path={`/dashboard/:studentId`}>
					<Dashboard />
				</Route>
			</Switch>
		</div>
	)
}

export default StudentsPage
