import React from 'react'
import SigninForm from '../forms/SigninForm'
import SignupForm from '../forms/SignupForm'

type Welcome = {
	signin: boolean
}

const WelcomePage: React.FC<Welcome> = ({ signin }) => {
	return (
		<div className='container row mx-0'>
			<div className='col-8 mt-5'>
				<h1 className='text-center'>Welcome to Study App</h1>
			</div>
			{signin ? <SignupForm /> : <SigninForm />}
		</div>
	)
}

export default WelcomePage
