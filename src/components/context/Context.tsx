import React, { useReducer } from 'react'
import { userReducer } from './reduer'
import decode from 'jwt-decode'
import { userSignIn, userSignOut, userSignUp, AnyAciton } from './action'
import { user } from '../../api'
import { AxiosPromise } from 'axios'

type AppContextProps = {
	children: React.ReactNode
}

type DecodedTokenType = {
	username: string
	iat: number
}

type StateType = {
	user: UserInfo
}

type ContextType = {
	state: StateType
	signin: (data: UserInfo) => Promise<void | AxiosPromise>
	signup: (data: UserInfo) => Promise<void | AxiosPromise>
	signout: () => void
	dispatch: React.Dispatch<AnyAciton>
}

const userInToken = (token: string): UserInfo => {
	const payload: DecodedTokenType = decode(token)
	return {
		username: payload.username,
	}
}

const initState: StateType | {} = localStorage.user
	? {
			user: userInToken(localStorage.user),
	  }
	: {}

export const Context = React.createContext({} as ContextType)

const AppContext: React.FC<AppContextProps> = props => {
	const [state, dispatch] = useReducer(userReducer, initState)

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

	return (
		<Context.Provider value={{ state, signin, signout, signup, dispatch }}>
			{props.children}
		</Context.Provider>
	)
}

export default AppContext
