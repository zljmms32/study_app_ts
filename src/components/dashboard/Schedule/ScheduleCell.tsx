import React from 'react'
import styles from './Schedule.module.css'
import { modifiedTime } from './TimePeriods'

type ScheduleCellProps = {
	rowSpan: number
	content: string
	time: number[]
}

const ScheduleCell: React.FC<ScheduleCellProps> = ({
	rowSpan,
	content,
	time,
}) => {
	return (
		<td rowSpan={rowSpan} className={styles.schedule}>
			<h6>{content}</h6>
			<span>{`${modifiedTime(time[0])}-${modifiedTime(time[1])}`}</span>
		</td>
	)
}

export default ScheduleCell
