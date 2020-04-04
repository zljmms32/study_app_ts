import React from 'react'
import { AxiosPromise } from 'axios'
import { Context } from '../../context/Context'
import HeaderMessage from '../../messages/HeaderMessage'
import TaskCard from './TaskCard'
import AddTask from './AddTask'

type TaskProps = {
	studentId: string
}

const Task: React.FC<TaskProps> = ({ studentId }) => {
	const { tasks, getTasks, addTask } = React.useContext(Context)
	const [showAddTask, setShowAddTask] = React.useState(false)

	React.useLayoutEffect(() => {
		getTasks(studentId)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleClick = (): void => {
		setShowAddTask(true)
	}
	const handleSubmit = (task: TaskInfo): Promise<void | AxiosPromise> =>
		addTask(task)

	return (
		<div className='container-fluid'>
			<AddTask
				show={showAddTask}
				onHide={(): void => setShowAddTask(false)}
				studentId={studentId}
				submit={handleSubmit}
			/>
			<div className='row'>
				<div className='col-2 overflow-auto border-right min-vh-100 overflow-scroll'>
					<button
						type='button'
						className='btn btn-primary btn-block'
						onClick={handleClick}
					>
						<i className='fa fa-plus-circle' aria-hidden='true'></i>
						Add Task
					</button>
				</div>
				<div className='col'>
					{tasks.length === 0 ? (
						<HeaderMessage text='No tasks added, Click add button to add some...' />
					) : (
						tasks.map(task => (
							<TaskCard task={task} key={task._id} />
						))
					)}
				</div>
			</div>
		</div>
	)
}

export default Task
