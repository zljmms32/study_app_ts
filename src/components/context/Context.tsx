import React, { useReducer } from 'react'
import { userReducer } from './reduer'
import decode from 'jwt-decode'
import {
	userSignIn,
	userSignOut,
	userSignUp,
	AnyAction,
	studentsAll,
	studentsAdd,
} from './action'
import { user, student } from '../../api'
import { AxiosPromise } from 'axios'

type AppContextProps = {
	children: React.ReactNode
}

type DecodedTokenType = {
	username: string
	iat: number
}

type StateType = {
	user?: UserInfo
	students?: StudentInfo[]
}

type ContextType = {
	user: UserInfo
	students: StudentInfo[]
	signin: (data: UserInfo) => Promise<void | AxiosPromise>
	signup: (data: UserInfo) => Promise<void | AxiosPromise>
	signout: () => void
	addStudent: (student: StudentInfo) => Promise<void | AxiosPromise>
	getStudents: () => Promise<void>
	dispatch: React.Dispatch<AnyAction>
}

const userInToken = (token: string): UserInfo => {
	const payload: DecodedTokenType = decode(token)
	return {
		username: payload.username,
	}
}

const init = (initialState: StateType): StateType => {
	const user = localStorage.user ? userInToken(localStorage.user) : {}
	initialState.user = user
	initialState.students = []
	return initialState
}

export const Context = React.createContext({} as ContextType)

const AppContext: React.FC<AppContextProps> = props => {
	const [state, dispatch] = useReducer(userReducer, {}, init)

	const getStudents = async (): Promise<void> => {
		const students = await student.all()
		dispatch(studentsAll(students))
	}

	const signin = (data: UserInfo): Promise<void | AxiosPromise> =>
		user.signin(data).then(user => {
			localStorage.user = user
			const u = userInToken(user)
			dispatch(userSignIn(u))
		})

	const signout = (): void => {
		delete localStorage.user
		dispatch(userSignOut())
	}

	const signup = (data: UserInfo): Promise<void | AxiosPromise> =>
		user.signup(data).then(user => {
			localStorage.user = user
			const u = userInToken(user)
			dispatch(userSignUp(u))
		})

	const addStudent = (data: StudentInfo): Promise<void | AxiosPromise> =>
		student.add(data).then(student => dispatch(studentsAdd(student)))

	return (
		<Context.Provider
			value={{
				user: state.user,
				students: state.students,
				signin,
				signout,
				signup,
				addStudent,
				getStudents,
				dispatch,
			}}
		>
			{props.children}
		</Context.Provider>
	)
}

export default AppContext
