import React, { useState, FormEvent } from 'react'
import InlineMessage from '../messages/InlineMessage'

type InputEvent = React.ChangeEvent<HTMLInputElement>

const SignupForm: React.FC = () => {
	const [data, setData] = useState<UserInfo>({
		username: '',
		password: '',
		passwordConfirm: '',
	})
	const [errors, setErrors] = useState<Errors>({})

	const validate = (data: UserInfo): Errors => {
		const errors: Errors = {}
		if (!data.username) errors.username = 'Invalid username'
		if (!data.password) errors.password = 'Invalid password'
		if (data.password !== data.passwordConfirm)
			errors.passwordConfirm = 'please enter then same password'
		return errors
	}

	const onChange = (e: InputEvent): void => {
		setErrors({})
		setData({
			...data,
			[e.target.name]: e.target.value,
		} as UserInfo)
	}

	const onSubmit = (e: FormEvent): void => {
		e.preventDefault()
		const errors = validate(data)
		setErrors(errors)
		// TODO API
	}

	return (
		<div className='col-4 mt-5 border rounded-lg bg-white'>
			<form className='my-2 py-2' onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='username'>
						<strong>Username</strong>
					</label>
					<input
						type='text'
						className='form-control'
						id='username'
						name='username'
						value={data.username}
						onChange={onChange}
					/>
					{errors.username && (
						<InlineMessage
							text={errors.username}
							messageType={'danger'}
						/>
					)}
				</div>
				<div className='form-group'>
					<label htmlFor='password'>
						<strong>Password</strong>
					</label>
					<input
						type='password'
						className='form-control'
						id='password'
						name='password'
						value={data.password}
						onChange={onChange}
					/>
					{errors.password && (
						<InlineMessage
							text={errors.password}
							messageType={'danger'}
						/>
					)}
				</div>
				<div className='form-group'>
					<label htmlFor='passwordConfirm'>
						<strong>Password Confirm</strong>
					</label>
					<input
						type='passwordConfirm'
						className='form-control'
						id='passwordConfirm'
						name='passwordConfirm'
						value={data.passwordConfirm}
						onChange={onChange}
					/>
					{errors.passwordConfirm && (
						<InlineMessage
							text={errors.passwordConfirm}
							messageType={'danger'}
						/>
					)}
				</div>
				<button
					type='submit'
					className='btn btn-primary btn-sm btn-block'
				>
					Sign Up
				</button>
			</form>
		</div>
	)
}

export default SignupForm
