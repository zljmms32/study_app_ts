import React from 'react'
import { useRouteMatch } from 'react-router-dom'

type TemplateProps = {
	boardName: string
	component: React.FC
}

const BoardTemplate: React.FC<TemplateProps> = ({
	boardName,
	component: Component,
}) => {
	const { url } = useRouteMatch()

	return (
		<div className='mb-2 col-lg-6 d-flex flex-column justify-content-start'>
			<div className='mx-2'>
				<span className='font-weight-bold'>{boardName}</span>
				<a href={`${url}`} className='text-primary float-right'>
					See all
				</a>
			</div>
			<div className='d-flex flex-column justify-content-around'>
				<Component />
				<Component />
			</div>
		</div>
	)
}

export default BoardTemplate