import React from 'react'
import InboxCard from './InboxCard'
import BoardTemplate from '../../BoardTemplate'

const Inbox: React.FC = () => {
    const items = [
        {
            _id: '2',
            from: 'Dorothy Richards',
            message: 'Dont forget to work on assignment page 36 in',
            attachment: 'homework.pdf',
        },
        {
            _id: '3',
            from: 'Dorothy Richards',
            message: 'Dont forget to work on assignment page 36 in',
            attachment: 'homework.pdf',
        },
    ]
    return (
        <BoardTemplate boardName='Inbox' component={InboxCard} items={items} />
    )
}

export default Inbox
