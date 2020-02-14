/* eslint-disable @typescript-eslint/no-explicit-any */
import { USER_SIGN_IN, AnyAciton, USER_SIGN_OUT } from './action'

export const user = (state: any = {}, action: AnyAciton): any => {
	switch (action.type) {
		case USER_SIGN_IN:
			return action.data
		case USER_SIGN_OUT:
			return {}
		default:
			return state
	}
}
