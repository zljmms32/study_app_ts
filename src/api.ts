import axios from 'axios'

export const user = {
	signin: (user: UserInfo): Promise<string> =>
		axios.post('/users/signin', { user }).then(res => res.data.user),
	signup: (user: UserInfo): Promise<string> =>
		axios.post('/users/signup', { user }).then(res => res.data.user),
}

export const student = {
	all: (): Promise<StudentInfo[]> =>
		axios.get('/students').then(res => res.data.students),
	add: (student: StudentInfo): Promise<StudentInfo> =>
		axios.post('/students', { student }).then(res => res.data.student),
}
