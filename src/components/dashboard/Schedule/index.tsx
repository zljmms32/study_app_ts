import React, { ReactElement } from 'react'
import moment from 'moment'
import TimePeriods from './TimePeriods'
import Day from './Day'
import ScheduleCell from './ScheduleCell'

export type Schedule = {
	day: string
	time: number[]
	content: string
}

export type Period = {
	start: number
	end: number
	step: number
}

const Schedule = () => {
	const [titles] = React.useState(['TimePeriod', ...moment.weekdays()])
	const [period] = React.useState<Period>({
		start: 0,
		end: 24,
		step: 0.5,
	})
	const [schedules] = React.useState<Schedule[]>([
		{
			day: 'Monday',
			time: [6, 8],
			content: 'complete homework',
		},
	])

	const generateCells = (period: Period, schedules: Schedule[]) => {
		const titleCells = titles.reduce(
			(acc, title) => {
				if (title === 'TimePeriod') {
					acc[title] = TimePeriods(period)
				} else {
					acc[title] = Day({
						title,
						period,
					})
				}
				return acc
			},
			{} as {
				[prop: string]: Array<ReactElement | undefined>
			}
		)
		return titleCells
	}

	const insertSchedules = (period: Period, schedules: Schedule[]) => {
		const titleCells = generateCells(period, schedules)
		for (let i = 0; i < schedules.length; i++) {
			const { day, content, time } = schedules[i]
			// schedule day
			const cells = titleCells[day]
			const indexOfScheduleTime = time[0] / period.step
			const cellCount = (time[1] - time[0]) / period.step
			// remove cells to insert schedule
			const scheduleCells = new Array(cellCount)
			scheduleCells[0] = (
				<ScheduleCell
					key={`${day}-${indexOfScheduleTime * period.step}`}
					content={content}
					time={time}
					rowSpan={cellCount}
				/>
			)
			cells.splice(indexOfScheduleTime, cellCount, ...scheduleCells)
		}
		return titleCells
	}

	const generateRows = (period: Period, schedules: Schedule[]) => {
		let rows = []
		const titleCells = insertSchedules(period, schedules)
		for (let index = 0; index < titleCells['TimePeriod'].length; index++) {
			let row = []
			for (let i = 0; i < titles.length; i++) {
				const title = titles[i]
				row.push(titleCells[title][index])
			}
			rows.push(row)
			row = []
		}
		return rows.map((row, index) => <tr key={index}>{row}</tr>)
	}

	return (
		<>
			<div className='row'>
				<button className='btn btn-primary btn-sm'>
					<i className='fa fa-calendar-plus' aria-hidden='true'>
						Add Item
					</i>
				</button>
				<button className='btn btn-primary btn-sm'>
					<i className='fas fa-pen-square' aria-hidden='true'>
						Edit Item
					</i>
				</button>
				<button className='btn btn-primary btn-sm'>
					<i className='far fa-calendar-times'>Delete Item</i>
				</button>
				<button className='btn btn-primary btn-sm'>
					<i className='fas fa-calendar-alt'>New Schedule</i>
				</button>
				<button className='btn btn-primary btn-sm'>
					<i className='fas fa-cogs'>Settings</i>
				</button>
			</div>
			<table className='table text-center'>
				<thead>
					<tr>
						{titles.map((title) => (
							<th key={title}>{title}</th>
						))}
					</tr>
				</thead>
				<tbody>{generateRows(period, schedules)}</tbody>
			</table>
		</>
	)
}

export default Schedule
