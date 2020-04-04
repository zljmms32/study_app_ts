import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Modal } from 'react-bootstrap'
import InlineMessage from '../../messages/InlineMessage'
import { AxiosPromise } from 'axios'
// import { Context } from '../../context/Context'

type AddTaskProps = {
	show: boolean
	onHide: () => void
	studentId: string
	submit: (task: TaskInfo) => Promise<void | AxiosPromise>
}

const AddTask: React.FC<AddTaskProps> = props => {
	// const {} = useContext(Context)
	const { submit, studentId, ...rest } = props

	const initData = {
		studentId: studentId,
		title: '',
		subject: '',
		content: '',
		deadline: '',
	}

	const [data, setData] = useState<TaskInfo>(initData)

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
				<Modal.Title>Add Task</Modal.Title>
			</Modal.Header>
			<form className='my-2 py-2' onSubmit={onSubmit}>
				<Modal.Body>
					<div className='form-group'>
						<label htmlFor='title'>
							<strong>Title</strong>
						</label>
						<input
							type='text'
							className='form-control'
							id='title'
							name='title'
							value={data.title}
							onChange={onChange}
						/>
						{errors.title && (
							<InlineMessage
								text={errors.title}
								messageType={'danger'}
							/>
						)}
					</div>
					<div className='form-group'>
						<label htmlFor='subject'>
							<strong>Subject</strong>
						</label>
						<input
							type='text'
							className='form-control'
							id='subject'
							name='subject'
							value={data.subject}
							onChange={onChange}
						/>
						{errors.subject && (
							<InlineMessage
								text={errors.subject}
								messageType={'danger'}
							/>
						)}
					</div>
					<div className='form-group'>
						<label htmlFor='content'>
							<strong>Content</strong>
						</label>
						<input
							type='text'
							className='form-control'
							id='content'
							name='content'
							value={data.content}
							onChange={onChange}
						/>
						{errors.content && (
							<InlineMessage
								text={errors.content}
								messageType={'danger'}
							/>
						)}
					</div>
					<div className='form-group'>
						<label htmlFor='deadline'>
							<strong>Deadline</strong>
						</label>
						<input
							type='date'
							className='form-control'
							id='deadline'
							name='deadline'
							value={data.deadline}
							onChange={onChange}
						/>
						{errors.deadline && (
							<InlineMessage
								text={errors.deadline}
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

export default AddTask
