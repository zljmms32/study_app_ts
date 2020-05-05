import axios from 'axios'

export const user = {
	signin: (user: UserInfo): Promise<string> =>
		axios.post('/users/signin', { user }).then((res) => res.data.user),
	signup: (user: UserInfo): Promise<string> =>
		axios.post('/users/signup', { user }).then((res) => res.data.user),
}

export const student = {
	all: (userId: string): Promise<StudentInfo[]> =>
		axios
			.get(`/students?userId=${userId}`)
			.then((res) => res.data.students),
	add: (student: StudentInfo): Promise<StudentInfo> =>
		axios.post('/students', { student }).then((res) => res.data.student),
}

export const task = {
	all: (studentId: string): Promise<TaskInfo[]> =>
		axios
			.get(`/tasks?studentId=${studentId}`)
			.then((res) => res.data.tasks),
	add: (task: TaskInfo): Promise<TaskInfo> =>
		axios.post('/tasks', { task }).then((res) => res.data.task),
	complete: (task: TaskInfo): Promise<TaskInfo> =>
		axios.patch('/tasks', { task }).then((res) => res.data.task),
}

export const schedule = {
	all: (studentId: string): Promise<Schedule[]> =>
		axios
			.get(`/schedules?studentId=${studentId}`)
			.then((res) => res.data.schedules),
	add: (schedule: Schedule): Promise<Schedule> =>
		axios.post('/schedules', { schedule }).then((res) => res.data.schedule),
	update: (schedule: Schedule): Promise<Schedule> =>
		axios
			.patch('/schedules', { schedule })
			.then((res) => res.data.schedule),
	delete: (scheduleId: string): Promise<Schedule> =>
		axios
			.delete('/schedules', { params: { _id: scheduleId } })
			.then((res) => res.data.schedule),
}
