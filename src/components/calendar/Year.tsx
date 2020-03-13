import React, { ReactElement } from 'react'
import moment from 'moment'

type YearProps = {
	date: moment.Moment
	setDate: React.Dispatch<React.SetStateAction<moment.Moment>>
	setShowDayTable: React.Dispatch<React.SetStateAction<boolean>>
	setShowMonthTable: React.Dispatch<React.SetStateAction<boolean>>
	setShowYearTable: React.Dispatch<React.SetStateAction<boolean>>
}

const Year: React.FC<YearProps> = ({
	date,
	setDate,
	setShowDayTable,
	setShowMonthTable,
	setShowYearTable,
}) => {
	const getDates = (
		start: moment.Moment,
		end: moment.Moment
	): moment.Moment[] => {
		let startDate = moment(start)
		const endDate = moment(end)
		const yearsArr = []

		while (startDate <= endDate) {
			yearsArr.push(startDate)
			startDate = moment(startDate).add(1, 'year')
		}
		return yearsArr
	}

	const years = (date: moment.Moment, amount = 4): moment.Moment[] => {
		const cur = moment(date)
		const start = moment(date)
			.set('year', parseInt(cur.format('Y'), 10))
			.add(-amount, 'year')
		const end = moment(date)
			.set('year', parseInt(cur.format('Y'), 10))
			.add(amount, 'year')
		return getDates(start, end)
	}

	const handleClick = (date: moment.Moment): void => {
		setDate(date)
		setShowDayTable(true)
		setShowMonthTable(false)
		setShowYearTable(false)
	}

	const yearsInTable = (dates: moment.Moment[]): ReactElement[] => {
		const rows: Array<ReactElement[]> = []
		for (let index = 0; index < dates.length; index += 3) {
			rows.push(
				dates.slice(index, index + 3).map(date => {
					const year = moment(date).format('Y')
					return (
						<td
							key={year}
							onClick={(): void => handleClick(date)}
							className={
								year === moment().format('Y')
									? 'bg-primary'
									: ''
							}
						>
							{year}
						</td>
					)
				})
			)
		}
		return rows.map((row, index) => <tr key={index}>{row}</tr>)
	}

	return <tbody>{yearsInTable(years(date))}</tbody>
}

export default Year
