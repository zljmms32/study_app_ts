import React, { useReducer } from 'react'
import { user } from './reduer'

type ContextProps = {
	children: React.ReactNode
}

export const Context = React.createContext({})

const AppContext: React.FC<ContextProps> = props => {
	const [state, dispatch] = useReducer(user, {})

	return (
		<Context.Provider value={[state, dispatch]}>
			{props.children}
		</Context.Provider>
	)
}

export default AppContext
