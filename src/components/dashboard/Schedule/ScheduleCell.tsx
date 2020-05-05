import React from 'react'
import styles from './Schedule.module.css'
import { modifiedTime } from './TimePeriods'

type ScheduleCellProps = {
	rowSpan: number
	content: string
	timeStart: number
	timeEnd: number
}

const ScheduleCell: React.FC<ScheduleCellProps> = ({
	rowSpan,
	content,
	timeStart,
	timeEnd,
}) => {
	return (
		<td rowSpan={rowSpan} className={styles.schedule}>
			<h6>{content}</h6>
			<span>{`${modifiedTime(timeStart)}-${modifiedTime(timeEnd)}`}</span>
		</td>
	)
}

export default ScheduleCell
