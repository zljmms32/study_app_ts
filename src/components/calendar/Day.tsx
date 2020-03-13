import React, { ReactElement } from 'react'
import moment from 'moment'

type DayProps = {
	date: moment.Moment
}

const Day: React.FC<DayProps> = ({ date }) => {
	const firstDayOfMonth = (): string => {
		return moment(date)
			.startOf('month')
			.format('d')
	}

	const daysBeforeFirstDay = (firstDay: string): ReactElement[] => {
		const blanks = []
		for (let day = 0; day < parseInt(firstDay, 10); day++) {
			blanks.push(<td key={'blanks' + day}>{''}</td>)
		}
		return blanks
	}

	const daysInMonth = (): ReactElement[] => {
		const daysInMonth = []
		for (let day = 1; day <= moment(date).daysInMonth(); day++) {
			const str = `${moment(date).format('YMMM') + day}`
			if (str === moment().format('YMMMD')) {
				daysInMonth.push(
					<td key={day} className='bg-primary'>
						{day}
					</td>
				)
			} else {
				daysInMonth.push(<td key={day}>{day}</td>)
			}
		}
		return daysInMonth
	}

	const daysInTable = (days: ReactElement[]): ReactElement[] => {
		const rows: Array<ReactElement[]> = []
		for (let index = 0; index < days.length; index += 7) {
			rows.push(days.slice(index, index + 7))
		}
		return rows.map((row, index) => (
			<tr key={`${moment(date).format('MMM') + index}`}>{row}</tr>
		))
	}

	return (
		<tbody>
			{daysInTable([
				...daysBeforeFirstDay(firstDayOfMonth()),
				...daysInMonth(),
			])}
		</tbody>
	)
}

export default Day
