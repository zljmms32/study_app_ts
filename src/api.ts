import axios, { AxiosPromise } from 'axios'

export const user = {
	signin: (user: UserInfo): AxiosPromise =>
		axios.post('/users/signin', { user }),
	signup: (user: UserInfo): AxiosPromise =>
		axios.post('/users/signup', { user }),
}

export const student = {
	all: (): Promise<StudentInfo[]> =>
		axios.get('/students').then(res => res.data.students),
	add: (student: StudentInfo): Promise<StudentInfo> =>
		axios.post('/students', { student }).then(res => res.data.student),
}
