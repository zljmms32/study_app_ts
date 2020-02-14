/* eslint-disable @typescript-eslint/no-explicit-any */
export const USER_SIGN_IN = 'USER_SIGN_IN'
export const USER_SIGN_OUT = 'USER_SIGN_OUT'

export interface Action<T = any> {
	type: T
}

export interface AnyAciton extends Action {
	[extraProps: string]: any
}

// action creator
export const userSignIn = (user: UserInfo): AnyAciton => ({
	type: USER_SIGN_IN,
	data: user,
})

export const userSignUp = (): AnyAciton => ({
	type: USER_SIGN_OUT,
	data: {},
})
