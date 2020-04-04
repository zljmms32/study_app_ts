type UserInfo = {
	username?: string
	userId?: string
	password?: string
	passwordConfirm?: string
}

type Errors = {
	username?: string
	password?: string
	passwordConfirm?: string
	global?: string
	studentName?: string
	grade?: string
	age?: string
	title?: string
	subject?: string
	content?: string
	deadline?: string
	finishedTime?: string
	status?: boolean
}

type StudentInfo = {
	studentName: string
	grade: string
	age: string
	userId: string
	_id?: string
}

type StateType = {
	user?: UserInfo
	students?: StudentInfo[]
	tasks?: TaskInfo[]
}

type TaskInfo = {
	_id?: string
	title: string
	subject: string
	content: string
	deadline: string
	finishedTime?: string
	status?: boolean
	studentId: string
}
