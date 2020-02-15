import React from 'react'
import { Link } from 'react-router-dom'

type NavProps = {
	url: string
}

const Nav: React.FC<NavProps> = ({ url }) => {
	return (
		<div className='container d-flex align-items-center'>
			<h1 className='text-lg mb-0 flex-grow-1'>Welcome to Study App</h1>
			<Link className='btn btn-primary btn-sm' to={`${url}/signin`}>
				Sign In
			</Link>
			<Link className='btn btn-primary btn-sm ml-2' to={`${url}/signup`}>
				Sign Up
			</Link>
		</div>
	)
}

export default Nav
