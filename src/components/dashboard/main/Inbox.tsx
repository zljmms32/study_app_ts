import React from 'react'
import InboxCard from './InboxCard'
import BoardTemplate from './BoardTemplate'

const Inbox: React.FC = () => {
	return <BoardTemplate boardName='Inbox' component={InboxCard} />
}

export default Inbox
