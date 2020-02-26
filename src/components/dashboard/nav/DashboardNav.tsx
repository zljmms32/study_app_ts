import React from 'react'
import Logo from './Logo'
import BoardMenuList from './BoardMenuList'
import CurrentStudentCard from './CurrentStudentCard'

const DashboardNav: React.FC = () => {
	return (
		<nav
			className='container d-flex align-items-center justify-content-between'
			style={{ height: '10%' }}
		>
			<Logo />
			<BoardMenuList />
			<CurrentStudentCard />
		</nav>
	)
}

export default DashboardNav
