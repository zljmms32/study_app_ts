/* eslint-disable @typescript-eslint/no-explicit-any */
import { USER_SIGN_IN, AnyAciton, USER_SIGN_OUT } from './action'

export const userReducer = (state: any = {}, action: AnyAciton): any => {
	switch (action.type) {
		case USER_SIGN_IN:
			return { ...state, user: action.payload }
		case USER_SIGN_OUT:
			delete state.user
			return { ...state }
		default:
			return state
	}
}
