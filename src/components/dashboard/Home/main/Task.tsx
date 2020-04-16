import React from 'react'
import BoardTemplate from '../../BoardTemplate'
import TaskCard from './TaskCard'
import { Context } from '../../../context/Context'

const Task: React.FC = () => {
	const { tasks } = React.useContext(Context)
	return (
		<BoardTemplate
			boardName='Task'
			component={TaskCard}
			items={tasks.slice(0, 2)}
		/>
	)
}

export default Task
