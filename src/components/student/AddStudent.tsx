import React, { useState, useContext, ChangeEvent, FormEvent } from 'react'
import { Modal } from 'react-bootstrap'
import InlineMessage from '../messages/InlineMessage'
import { AxiosPromise } from 'axios'
import { Context } from '../context/Context'

type AddStudentProps = {
	show: boolean
	onHide: () => void
	submit: (student: StudentInfo) => Promise<void | AxiosPromise>
}

const AddStudent: React.FC<AddStudentProps> = props => {
	const { user } = useContext(Context)
	const { submit, ...rest } = props

	const initData = {
		userId: user.userId as string,
		studentName: '',
		grade: '',
		age: '',
	}

	const [data, setData] = useState<StudentInfo>(initData)

	const [errors, setErrors] = useState<Errors>({})

	const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setErrors({})
		setData({
			...data,
			[e.target.name]: e.target.value,
		})
	}

	const onSubmit = (e: FormEvent): void => {
		e.preventDefault()
		submit(data).then(() => {
			props.onHide()
			setData(initData)
		})
	}

	const hideModal = (e: FormEvent): void => {
		e.preventDefault()
		props.onHide()
		setData(initData)
	}

	return (
		<Modal {...rest} size='lg'>
			<Modal.Header closeButton>
				<Modal.Title>Add Student</Modal.Title>
			</Modal.Header>
			<form className='my-2 py-2' onSubmit={onSubmit}>
				<Modal.Body>
					<div className='form-group'>
						<label htmlFor='studentName'>
							<strong>Student Name</strong>
						</label>
						<input
							type='text'
							className='form-control'
							id='studentName'
							name='studentName'
							value={data.studentName}
							onChange={onChange}
						/>
						{errors.studentName && (
							<InlineMessage
								text={errors.studentName}
								messageType={'danger'}
							/>
						)}
					</div>
					<div className='form-group'>
						<label htmlFor='age'>
							<strong>Student Age</strong>
						</label>
						<input
							type='text'
							className='form-control'
							id='age'
							name='age'
							value={data.age}
							onChange={onChange}
						/>
						{errors.age && (
							<InlineMessage
								text={errors.age}
								messageType={'danger'}
							/>
						)}
					</div>
					<div className='form-group'>
						<label htmlFor='grade'>
							<strong>Grade</strong>
						</label>
						<input
							type='grade'
							className='form-control'
							id='grade'
							name='grade'
							value={data.grade}
							onChange={onChange}
						/>
						{errors.grade && (
							<InlineMessage
								text={errors.grade}
								messageType={'danger'}
							/>
						)}
					</div>
				</Modal.Body>
				<Modal.Footer>
					<button
						className='btn btn-outline-primary btn-sm'
						onClick={hideModal}
					>
						Cancel
					</button>
					<button type='submit' className='btn btn-primary btn-sm'>
						Save
					</button>
				</Modal.Footer>
			</form>
		</Modal>
	)
}

export default AddStudent
