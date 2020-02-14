import React from 'react'
import './index.css'

type HeaderMessageProps = {
	text: string
}

const HeaderMessage: React.FC<HeaderMessageProps> = ({ text }) => {
	return (
		<div className='alert alert-danger message' role='alert'>
			{text}
		</div>
	)
}

export default HeaderMessage
