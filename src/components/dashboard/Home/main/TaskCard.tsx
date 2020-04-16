import React from 'react'

type Props = {
    item: TaskInfo
}

const TaskCard: React.FC<Props> = ({ item }) => {
    return (
        <div
            style={{ fontSize: '0.8rem' }}
            className='shadow-sm bg-white rounded-lg m-1 d-flex align-items-center justify-content-around p-2'
        >
            <div
                style={{
                    height: '0.4rem',
                    width: '0.4rem',
                    display: 'inline-block',
                    borderRadius: '50%',
                    backgroundColor: item.status === true ? 'skyblue' : 'red',
                }}
            ></div>
            <div className='font-weight-bold col-3'>{item.title}</div>
            <div className='font-weight-bold col-3'>{item.content}</div>
            <div className='font-weight-bold col-2'>{item.subject}</div>
            <div className='small text-muted col-3'>{item.deadline}</div>
        </div>
    )
}

export default TaskCard
