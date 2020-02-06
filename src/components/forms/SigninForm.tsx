import React, { useState, FormEvent, ChangeEvent } from 'react'
import InlineMessage from '../messages/InlineMessage'
import { Link } from 'react-router-dom'

const SigninForm: React.FC = () => {
	const [data, setData] = useState<UserInfo>({
		username: '',
		password: '',
	})
	const [errors, setErrors] = useState<Errors>({})

	const validate = (data: UserInfo): Errors => {
		const errors: Errors = {}
		if (!data.username) errors.username = 'Invalid username'
		if (!data.password) errors.password = 'Invalid password'
		return errors
	}

	const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
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
					<small className='float-right'>
						<Link to='/forgetpassword'>Forget Password?</Link>
					</small>
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
				<button
					type='submit'
					className='btn btn-primary btn-sm btn-block'
				>
					Sign In
				</button>
			</form>
			<div
				className='border rounded-lg my-2 py-2 text-center'
				style={{ backgroundColor: '#f8f9fa' }}
			>
				New to Study? <Link to='/signup'>Create an account.</Link>
			</div>
		</div>
	)
}

export default SigninForm
