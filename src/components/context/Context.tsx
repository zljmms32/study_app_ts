import React, { useReducer } from "react";
import { userReducer } from "./reduer";
import decode from "jwt-decode";
import {
	userSignIn,
	userSignOut,
	userSignUp,
	AnyAction,
	studentsAll,
	studentsAdd,
	tasksAdd,
	tasksAll,
	tasksComplete,
} from "./action";
import { user, student, task } from "../../api";
import { AxiosPromise } from "axios";

type AppContextProps = {
	children: React.ReactNode;
};

type DecodedTokenType = {
	username: string;
	userId: string;
	iat: number;
};

type ContextType = {
	user: UserInfo;
	students: StudentInfo[];
	tasks: TaskInfo[];
	signin: (data: UserInfo) => Promise<void | AxiosPromise>;
	signup: (data: UserInfo) => Promise<void | AxiosPromise>;
	signout: () => void;
	addStudent: (student: StudentInfo) => Promise<void | AxiosPromise>;
	getStudents: (userId: string) => Promise<void>;
	addTask: (task: TaskInfo) => Promise<void | AxiosPromise>;
	getTasks: (studentId: string) => Promise<void>;
	completeTask: (task: TaskInfo) => Promise<void | AxiosPromise>;
	dispatch: React.Dispatch<AnyAction>;
};

const userInToken = (token: string): UserInfo => {
	const payload: DecodedTokenType = decode(token);
	return {
		username: payload.username,
		userId: payload.userId,
	};
};

const init = (initialState: StateType): StateType => {
	const user = localStorage.user ? userInToken(localStorage.user) : {};
	initialState.user = user;
	initialState.students = [];
	initialState.tasks = [];
	return initialState;
};

export const Context = React.createContext({} as ContextType);

const AppContext: React.FC<AppContextProps> = (props) => {
	const [state, dispatch] = useReducer(userReducer, {}, init);

	const getStudents = async (userId: string): Promise<void> => {
		const students = await student.all(userId);
		dispatch(studentsAll(students));
	};

	const getTasks = async (studentId: string): Promise<void> => {
		const tasks = await task.all(studentId);
		dispatch(tasksAll(tasks));
	};

	const signin = (data: UserInfo): Promise<void | AxiosPromise> =>
		user.signin(data).then((user) => {
			localStorage.user = user;
			const u = userInToken(user);
			dispatch(userSignIn(u));
		});

	const signout = (): void => {
		delete localStorage.user;
		dispatch(userSignOut());
	};

	const signup = (data: UserInfo): Promise<void | AxiosPromise> =>
		user.signup(data).then((user) => {
			localStorage.user = user;
			const u = userInToken(user);
			dispatch(userSignUp(u));
		});

	const addStudent = (data: StudentInfo): Promise<void | AxiosPromise> =>
		student.add(data).then((student) => dispatch(studentsAdd(student)));

	const addTask = (data: TaskInfo): Promise<void | AxiosPromise> =>
		task.add(data).then((task) => dispatch(tasksAdd(task)));

	const completeTask = (data: TaskInfo): Promise<void | AxiosPromise> =>
		task.complete(data).then((task) => dispatch(tasksComplete(task)));

	return (
		<Context.Provider
			value={{
				user: state.user,
				students: state.students,
				tasks: state.tasks,
				signin,
				signout,
				signup,
				addStudent,
				getStudents,
				addTask,
				completeTask,
				getTasks,
				dispatch,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};

export default AppContext;
