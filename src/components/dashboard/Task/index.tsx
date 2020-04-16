import React, { useState } from 'react'
import { AxiosPromise } from 'axios'
import { Context } from '../../context/Context'
import TaskCard from './TaskCard'
import AddTask from './AddTask'

type TaskProps = {
    studentId: string
}

type Filter = 'all' | 'completed' | 'ongoing'

const Task: React.FC<TaskProps> = ({ studentId }) => {
    const { tasks, addTask, completeTask } = React.useContext(Context)
    const [showAddTask, setShowAddTask] = useState(false)
    const [filter, setFilter] = useState<Filter>('all')

    const handleClick = (): void => {
        setShowAddTask(true)
    }

    const handleShowAllTasks = (): void => {
        setFilter('all')
    }

    const handleShowCompletedTasks = (): void => {
        setFilter('completed')
    }

    const handleShowUnfinishedTasks = (): void => {
        setFilter('ongoing')
    }

    const handleSubmit = (task: TaskInfo): Promise<void | AxiosPromise> =>
        addTask(task)

    const generateTasks = (
        tasks: TaskInfo[]
    ): React.ReactElement[] | React.ReactElement | null => {
        let ele = null
        if (tasks.length === 0) {
            ele = (
                <tr>
                    <td>No tasks added, Click add button to add some...</td>
                </tr>
            )
        } else if (filter === 'completed') {
            const tasksShow = tasks.filter((task) => task.status === true)
            ele = tasksShow!.map((task) => (
                <TaskCard
                    task={task}
                    key={task._id}
                    completeTask={completeTask}
                />
            ))
        } else if (filter === 'ongoing') {
            const tasksShow = tasks.filter((task) => task.status === false)
            ele = tasksShow!.map((task) => (
                <TaskCard
                    task={task}
                    key={task._id}
                    completeTask={completeTask}
                />
            ))
        } else if (filter === 'all') {
            ele = tasks.map((task) => (
                <TaskCard
                    task={task}
                    key={task._id}
                    completeTask={completeTask}
                />
            ))
        }

        return ele
    }

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
                        <span>Add Task</span>
                    </button>
                    <button
                        type='button'
                        className='btn btn-primary btn-block'
                        onClick={handleShowAllTasks}
                    >
                        <i
                            className='fa fa-check-circle'
                            aria-hidden='true'
                        ></i>
                        <span>所有</span>
                    </button>
                    <button
                        type='button'
                        className='btn btn-primary btn-block'
                        onClick={handleShowCompletedTasks}
                    >
                        <i
                            className='fa fa-check-circle'
                            aria-hidden='true'
                        ></i>
                        <span>已完成</span>
                    </button>
                    <button
                        type='button'
                        className='btn btn-primary btn-block'
                        onClick={handleShowUnfinishedTasks}
                    >
                        <i className='fa fa-clock' aria-hidden='true'></i>
                        <span>未完成</span>
                    </button>
                </div>
                <div className='col'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Categories</th>
                                <th>Due</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>{generateTasks(tasks)}</tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Task
