import React, { ReactElement } from 'react'
import Cell from './Cell'
import { Period } from './index'

type DayProps = {
	title: string
	period: Period
	schedule?: Schedule
}

const Day = ({ title, period, schedule }: DayProps): ReactElement[] => {
	const { start, end, step } = period
	const cells = []
	for (let index = start; index < end; index += step) {
		if (schedule !== undefined) {
		}
		const element = <Cell key={`${title}-${index}`} />
		cells.push(element)
	}

	return cells
}

export default Day
