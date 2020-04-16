/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    USER_SIGN_IN,
    AnyAction,
    USER_SIGN_OUT,
    STUDENT_ALL,
    STUDENT_ADD,
    TASK_ALL,
    TASK_ADD,
    TASK_COMPLETE,
} from './action'

export const userReducer = (
    state: StateType = {
        user: {},
        students: [],
        tasks: [],
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
        case TASK_ALL:
            return { ...state, tasks: action.payload }
        case TASK_ADD:
            return {
                ...state,
                tasks: [...(state.tasks as TaskInfo[]), action.payload],
            }
        case TASK_COMPLETE:
            const tasks = [...state.tasks!]
            tasks?.forEach((task) => {
                if (task._id === action.payload._id) {
                    task.status = action.payload.status
                }
            })
            return {
                ...state,
                tasks: tasks,
            }
        default:
            return state
    }
}
