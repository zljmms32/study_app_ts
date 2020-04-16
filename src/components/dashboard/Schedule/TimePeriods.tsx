import React, { ReactElement } from 'react'
import { Period } from './index'

export const modifiedTime = (time: number): string => {
	const int = Math.floor(time)
	const decimal = time - int
	let mTime =
		(int >= 10 ? `${int}` : `0${int}`) + ':' + (decimal === 0 ? '00' : '30')
	return mTime
}

const TimePeriods = (period: Period): ReactElement[] => {
	const { start, end, step } = period
	const timePeriods = []
	let timePeriod: ReactElement
	for (let index = start; index < end; index += step) {
		timePeriod = (
			<td key={index}>
				{modifiedTime(index) + '-' + modifiedTime(index + step)}
			</td>
		)
		timePeriods.push(timePeriod)
	}
	return timePeriods
}

export default TimePeriods
