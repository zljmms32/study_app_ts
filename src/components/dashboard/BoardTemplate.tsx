import React from 'react'
import { useRouteMatch } from 'react-router-dom'

type TemplateProps<T> = {
    boardName: string
    component: React.FC<any>
    items: T[]
}

const BoardTemplate: React.FC<TemplateProps<
    Exam | Inbox | Project | TaskInfo
>> = ({ boardName, component: Component, items }) => {
    const { url } = useRouteMatch()

    return (
        <div className='mb-2 col-lg-6 d-flex flex-column justify-content-start'>
            <div className='mx-2'>
                <span className='font-weight-bold'>{boardName}</span>
                <a href={`${url}`} className='text-primary float-right'>
                    See all
                </a>
            </div>
            <div className='d-flex flex-column justify-content-around'>
                {items.map((i) => (
                    <Component item={i} key={i._id} />
                ))}
            </div>
        </div>
    )
}

export default BoardTemplate
