import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const BoardMenuList: React.FC = () => {
	const { url } = useRouteMatch()
	return (
		<div className='d-flex align-items-center justify-content-between'>
			<Link className='px-1 mx-2 btn btn-lg' to={`${url}/home`}>
				Home
			</Link>
			<Link className='px-1 mx-2 btn btn-lg' to={`${url}/task`}>
				Task
			</Link>
			<Link className='px-1 mx-2 btn btn-lg' to={`${url}/test`}>
				Test
			</Link>
			<Link className='px-1 mx-2 btn btn-lg' to={`${url}/report`}>
				Report
			</Link>
		</div>
	)
}

export default BoardMenuList
