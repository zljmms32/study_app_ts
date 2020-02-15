import React, { useState, ChangeEvent } from 'react'
import { Modal } from 'react-bootstrap'
import InlineMessage from '../messages/InlineMessage'

type StudentInfo = {
	studentName: string
	grade: string
}

type AddStudentProps = {
	show: boolean
	onHide: () => void
}

const AddStudent: React.FC<AddStudentProps> = props => {
	const [data, setData] = useState<StudentInfo>({
		studentName: '',
		grade: '',
	})

	const [errors, setErrors] = useState<Errors>({})

	const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setErrors({})
		setData({
			...data,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<Modal
			{...props}
			centered
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
		>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					Add Student
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form className='my-2 py-2'>
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
				</form>
			</Modal.Body>
			<Modal.Footer>
				<button
					type='submit'
					className='btn btn-outline-primary btn-sm'
					onClick={props.onHide}
				>
					Cancel
				</button>
				<button type='submit' className='btn btn-primary btn-sm'>
					Save
				</button>
			</Modal.Footer>
		</Modal>
	)
}

export default AddStudent
