import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Modal } from 'react-bootstrap'
import InlineMessage from '../../messages/InlineMessage'
import moment from 'moment'
import { AxiosPromise } from 'axios'
// import { Context } from '../../context/Context'

type AddItemProps = {
	show: boolean
	onHide: () => void
}

const AddItem: React.FC<AddItemProps> = (props) => {
	// const { submit, studentId, ...rest } = props

	const initData = {
		content: '',
		day: 'Sunday',
		timeStart: 0,
		timeEnd: 0,
	}

	const [data, setData] = useState<Schedule>(initData)

	const [errors, setErrors] = useState<Errors>({})

	const validate = (data: Schedule): Errors => {
		const errors: Errors = {}
		if (!data.content) errors.username = "can't be blank"
		if (data.timeEnd < data.timeStart) errors.time = 'time error'
		return errors
	}

	const onChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	): void => {
		setErrors({})
		setData({
			...data,
			[e.target.name]: e.target.value,
		})
	}

	const onSubmit = (e: FormEvent): void => {
		e.preventDefault()
		// submit(data).then(() => {
		// 	props.onHide()
		// 	setData(initData)
		// })
		props.onHide()
	}

	const hideModal = (e: FormEvent): void => {
		e.preventDefault()
		props.onHide()
		setData(initData)
	}

	return (
		<Modal {...props} size='sm'>
			<Modal.Header closeButton>
				<Modal.Title>Add Item</Modal.Title>
			</Modal.Header>
			<form className='my-2 py-2' onSubmit={onSubmit}>
				<Modal.Body>
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
						<label htmlFor='day'>
							<strong>Day:</strong>
						</label>
						<select
							name='day'
							id='day'
							value={data.day}
							onChange={onChange}
						>
							{moment.weekdays().map((item) => (
								<option key={item} value={item}>
									{item}
								</option>
							))}
						</select>
						{errors.day && (
							<InlineMessage
								text={errors.day}
								messageType={'danger'}
							/>
						)}
					</div>
					<div className='form-group'>
						<label htmlFor='time'>
							<strong>Time</strong>
						</label>
						<input
							type='number'
							className='form-control'
							id='timeStart'
							name='timeStart'
							value={data.timeStart}
							onChange={onChange}
						/>
						<input
							type='number'
							className='form-control'
							id='timeEnd'
							name='timeEnd'
							value={data.timeEnd}
							onChange={onChange}
						/>
						{errors.time && (
							<InlineMessage
								text={errors.time}
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

export default AddItem
