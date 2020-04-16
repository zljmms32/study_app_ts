import React from 'react'
import { AxiosPromise } from 'axios'

type TaskCardProps = {
	task: TaskInfo
	completeTask: (task: TaskInfo) => Promise<void | AxiosPromise>;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, completeTask }) => {
	const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>): void => {
		e.preventDefault()
		completeTask(task)
	}

	return (
		<tr className='w-100 shadow-sm rounded border mb-2 p-2 align-items-center text-center bg-white'>
			<td className='border rounded text-nowrap bg-primary'>
				{task.title}
			</td>

			<td className='h6 bold text-left'>{task.content}</td>
			<td className='border rounded bg-info'>{task.subject}</td>
			<td className='border rounded text-nowrap bg-primary'>
				{task.deadline}
			</td>

			<td>
				<button className={`border rounded bg-${task.status === true ? 'primary' : 'danger'}`} onClick={handleClick}>
					{
						task.status === true ? '已完成' : '未完成'
					}
				</button>
			</td>
		</tr>
	)
}

export default TaskCard
