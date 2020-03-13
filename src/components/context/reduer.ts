/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	USER_SIGN_IN,
	AnyAction,
	USER_SIGN_OUT,
	STUDENT_ALL,
	STUDENT_ADD,
} from './action'

export const userReducer = (
	state: StateType = {
		user: {},
		students: [],
	},
	action: AnyAction
): any => {
	switch (action.type) {
		case USER_SIGN_IN:
			return { ...state, user: action.payload }
		case USER_SIGN_OUT:
			return { ...state, user: {}, students: [] }
		case STUDENT_ALL:
			return { ...state, students: action.payload }
		case STUDENT_ADD:
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			return { ...state, students: [...state.students!, action.payload] }
		default:
			return state
	}
}
