import React from 'react'

const InboxCard: React.FC = () => {
	return (
		<div className='bg-white shadow-sm m-1 p-1 rounded d-flex flex-column align-items-start justify-content-around'>
			<span className='font-weight-bold mb-1 h6'>Dorothy Richards</span>
			<div className='w-100 text-truncate mb-1 h6'>
				Dont forget to work on assignment page 36 in
			</div>
			<a href='/file' className='small'>
				homework.pdf
			</a>
		</div>
	)
}

export default InboxCard
