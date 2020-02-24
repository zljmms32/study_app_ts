import React from 'react'

const DashboardPage: React.FC = () => {
	return (
		<div className='container vw-100 vh-100 d-flex flex-column align-items-center'>
			<nav className='container' style={{ height: '10%' }}>
				Nav
			</nav>
			<div className='container d-flex' style={{ height: '90%' }}>
				<div className='container'>Main</div>
				<div className='container'>sidebar</div>
			</div>
		</div>
	)
}

export default DashboardPage
