import axios, { AxiosPromise } from 'axios'

export const user = {
	signin: (user: UserInfo): AxiosPromise =>
		axios.post('/users/signin', { user }),
	signup: (user: UserInfo): AxiosPromise =>
		axios.post('/users/signup', { user }),
}
