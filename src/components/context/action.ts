/* eslint-disable @typescript-eslint/no-explicit-any */
export const USER_SIGN_IN = 'USER_SIGN_IN'
export const USER_SIGN_OUT = 'USER_SIGN_OUT'
export const USER_SIGN_UP = 'USER_SIGN_UP'

export interface Action<T = any> {
	type: T
}

export interface AnyAciton extends Action {
	[extraProps: string]: any
}

// action creator
export const userSignIn = (user: UserInfo): AnyAciton => ({
	type: USER_SIGN_IN,
	payload: user,
})

export const userSignUp = (user: UserInfo): AnyAciton => ({
	type: USER_SIGN_UP,
	payload: user,
})

export const userSignOut = (): AnyAciton => ({
	type: USER_SIGN_OUT,
})
