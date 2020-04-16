import React from 'react'

type Props = {
    item: Inbox
}

const InboxCard: React.FC<Props> = ({ item }) => {
    return (
        <div className='bg-white shadow-sm m-1 p-1 rounded d-flex flex-column align-items-start justify-content-around'>
            <span className='font-weight-bold mb-1 h6'>{item.from}</span>
            <div className='w-100 text-truncate mb-1 h6'>{item.message}</div>
            <a href='/file' className='small'>
                {item.attachment}
            </a>
        </div>
    )
}

export default InboxCard
