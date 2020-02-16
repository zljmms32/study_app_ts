type UserInfo = {
	username: string
	password: string
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
}

type StudentInfo = {
	studentName: string
	grade: string
	age: string
}
