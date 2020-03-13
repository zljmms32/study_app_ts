import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from './context/Context'

type NavProps = {
	url: string
}

const Nav: React.FC<NavProps> = ({ url }) => {
	const { user, signout } = useContext(Context)
	return (
		<div className='col-12 d-flex align-items-center'>
			<h1 className='text-lg mb-0 flex-grow-1'>Welcome to Study App</h1>
			{Object.keys(user).length > 0 ? (
				<Link
					className='btn btn-primary btn-sm'
					onClick={(): void => signout()}
					to={`${url}/`}
				>
					Sign Out
				</Link>
			) : (
				<>
					<Link
						className='btn btn-primary btn-sm'
						to={`${url}/signin`}
					>
						Sign In
					</Link>
					<Link
						className='btn btn-primary btn-sm ml-2'
						to={`${url}/signup`}
					>
						Sign Up
					</Link>
				</>
			)}
		</div>
	)
}

export default Nav
