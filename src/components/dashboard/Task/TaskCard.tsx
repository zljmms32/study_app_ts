import React from 'react'

type TaskCardProps = {
	task: TaskInfo
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
	return (
		<div className='w-100 shadow-sm rounded border mb-2 row p-2 align-items-center text-center bg-white'>
			<span className='h6 bold col text-left'>{task.content}</span>
			<span className='border rounded col-1 bg-info'>{task.subject}</span>
			<span className='border rounded col-1 text-nowrap bg-primary'>
				{task.title}
			</span>
			<span className='border rounded col-2 text-nowrap bg-primary'>
				{task.deadline}
			</span>
			<span className='border rounded col-1 bg-primary'>完成</span>
		</div>
	)
}

export default TaskCard
