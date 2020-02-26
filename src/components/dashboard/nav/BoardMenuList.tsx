import React from 'react'
import { Link } from 'react-router-dom'

const BoardMenuList: React.FC = () => {
	return (
		<div className='d-flex align-items-center justify-content-between'>
			<Link className='px-1 mx-2 btn btn-lg' to='/home'>
				Home
			</Link>
			<Link className='px-1 mx-2 btn btn-lg' to='/home'>
				Task
			</Link>
			<Link className='px-1 mx-2 btn btn-lg' to='/home'>
				Test
			</Link>
			<Link className='px-1 mx-2 btn btn-lg' to='/home'>
				Report
			</Link>
		</div>
	)
}

export default BoardMenuList
