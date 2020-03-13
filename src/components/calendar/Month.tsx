import React, { ReactElement } from 'react'
import moment from 'moment'

type MonthProps = {
	date: moment.Moment
	months: string[]
	setDate: React.Dispatch<React.SetStateAction<moment.Moment>>
	setShowDayTable: React.Dispatch<React.SetStateAction<boolean>>
	setShowMonthTable: React.Dispatch<React.SetStateAction<boolean>>
}

const Month: React.FC<MonthProps> = ({
	setDate,
	date,
	months,
	setShowDayTable,
	setShowMonthTable,
}) => {
	const handleClick = (month: string): void => {
		const monthNo = months.indexOf(month)
		setDate(moment(date).set('month', monthNo))
		setShowDayTable(true)
		setShowMonthTable(false)
	}

	const monthInTable = (months: string[]): ReactElement[] => {
		const rows: Array<ReactElement[]> = []
		for (let index = 0; index < months.length; index += 3) {
			rows.push(
				months.slice(index, index + 3).map(month => (
					<td key={month} onClick={(): void => handleClick(month)}>
						{month}
					</td>
				))
			)
		}
		return rows.map((row, index) => <tr key={index}>{row}</tr>)
	}

	return <tbody>{monthInTable(months)}</tbody>
}

export default Month
