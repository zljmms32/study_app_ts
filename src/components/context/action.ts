/* eslint-disable @typescript-eslint/no-explicit-any */
export const USER_SIGN_IN = 'USER_SIGN_IN'
export const USER_SIGN_OUT = 'USER_SIGN_OUT'
export const USER_SIGN_UP = 'USER_SIGN_UP'
export const STUDENT_ALL = 'STUDENT_ALL'
export const STUDENT_ADD = 'STUDENT_ADD'
export const TASK_ALL = 'TASK_ALL'
export const TASK_ADD = 'TASK_ADD'
export const TASK_COMPLETE = 'TASK_COMPLETE'
export const SCHEDULE_ALL = 'SCHEDULE_ALL'
export const SCHEDULE_ADD = 'SCHEDULE_ADD'
export const SCHEDULE_UPDATE = 'SCHEDULE_DELETE'
export const SCHEDULE_DELETE = 'SCHEDULE_UPDATE'

export interface Action<T = any> {
	type: T
}

export interface AnyAction extends Action {
	[extraProps: string]: any
}

// action creator
export const userSignIn = (user: UserInfo): AnyAction => ({
	type: USER_SIGN_IN,
	payload: user,
})

export const userSignUp = (user: UserInfo): AnyAction => ({
	type: USER_SIGN_UP,
	payload: user,
})

export const userSignOut = (): AnyAction => ({
	type: USER_SIGN_OUT,
})

export const studentsAll = (students: StudentInfo[]): AnyAction => ({
	type: STUDENT_ALL,
	payload: students,
})

export const studentsAdd = (student: StudentInfo): AnyAction => ({
	type: STUDENT_ADD,
	payload: student,
})

export const tasksAll = (tasks: TaskInfo[]): AnyAction => ({
	type: TASK_ALL,
	payload: tasks,
})

export const tasksAdd = (task: TaskInfo): AnyAction => ({
	type: TASK_ADD,
	payload: task,
})

export const tasksComplete = (task: TaskInfo): AnyAction => ({
	type: TASK_COMPLETE,
	payload: task,
})
