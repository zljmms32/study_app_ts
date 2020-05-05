import React, { ReactElement } from 'react'
import moment from 'moment'
import TimePeriods from './TimePeriods'
import Day from './Day'
import ScheduleCell from './ScheduleCell'
import AddItem from './AddItem'

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
	const [schedules] = React.useState<Schedule[]>([])

	const [showAddItem, setShowAddItem] = React.useState(false)

	const generateCells = (period: Period) => {
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
		const titleCells = generateCells(period)
		for (let i = 0; i < schedules.length; i++) {
			const { day, content, timeStart, timeEnd } = schedules[i]
			// schedule day
			const cells = titleCells[day]
			const indexOfScheduleTime = timeStart / period.step
			const cellCount = (timeEnd - timeStart) / period.step
			// remove cells to insert schedule
			const scheduleCells = new Array(cellCount)
			scheduleCells[0] = (
				<ScheduleCell
					key={`${day}-${indexOfScheduleTime * period.step}`}
					content={content}
					timeStart={timeStart}
					timeEnd={timeEnd}
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
				<button
					className='btn btn-primary btn-sm'
					onClick={() => setShowAddItem(true)}
				>
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
			<AddItem show={showAddItem} onHide={() => setShowAddItem(false)} />
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
