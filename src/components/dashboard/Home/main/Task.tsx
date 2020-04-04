import React from 'react'
import BoardTemplate from '../../BoardTemplate'
import TaskCard from './TaskCard'

const Task: React.FC = () => {
	return <BoardTemplate boardName='Task' component={TaskCard} />
}

export default Task
