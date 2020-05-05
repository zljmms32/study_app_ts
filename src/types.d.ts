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
	day?: string
	time?: string
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

type Exam = {
	_id: string
	subject: string
	location: string
	day: string
	time: string
}

type Inbox = {
	_id: string
	from: string
	message: string
	attachment: string
}

type Project = {
	_id: string
	progress: number
	title: string
	subject: string
	createdTime: string
}

type Schedule = {
	day: string
	timeStart: number
	timeEnd: number
	content: string
}
