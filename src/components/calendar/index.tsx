import React from 'react'
import moment from 'moment'
import Year from './Year'
import Month from './Month'
import Day from './Day'

const Calendar: React.FC = () => {
	const [date, setDate] = React.useState(moment())

	const [showYearTable, setShowYearTable] = React.useState(false)

	const [showMonthTable, setShowMonthTable] = React.useState(false)

	const [showDayTable, setShowDayTable] = React.useState(true)

	const weekdaysShort = moment.weekdaysShort()

	const weekdaysShortName = weekdaysShort.map(item => {
		return (
			<th key={item} scope='col'>
				{item}
			</th>
		)
	})

	React.useEffect(() => {
		if (showMonthTable) {
			setShowYearTable(false)
			setShowDayTable(false)
		} else {
			setShowDayTable(true)
		}
	}, [showMonthTable])

	React.useEffect(() => {
		if (showYearTable) {
			setShowMonthTable(false)
			setShowDayTable(false)
		} else {
			setShowDayTable(true)
		}
	}, [showYearTable])

	const handleDateMove = (direction: number): void => {
		setDate(moment(date).add(direction, 'month'))
	}

	return (
		<div className='px-0'>
			<div className='text-center bg-white d-flex justify-content-between align-items-center'>
				<button onClick={(): void => handleDateMove(-1)}>
					<i className='fa fa-chevron-left' aria-hidden='true'></i>
				</button>
				<button
					onClick={(): void => setShowMonthTable(status => !status)}
					className='btn btn-primary btn-sm'
					disabled={showYearTable ? true : false}
				>
					{moment(date).format('MMM')}
				</button>
				<button
					onClick={(): void => setShowYearTable(status => !status)}
					className='btn btn-primary btn-sm'
					disabled={showMonthTable ? true : false}
				>
					{moment(date).format('Y')}
				</button>
				<button onClick={(): void => handleDateMove(1)}>
					<i className='fa fa-chevron-right' aria-hidden='true'></i>
				</button>
			</div>
			{showYearTable && (
				<table className='table table-sm table-striped text-center'>
					<Year
						date={date}
						setDate={setDate}
						setShowDayTable={setShowDayTable}
						setShowMonthTable={setShowMonthTable}
						setShowYearTable={setShowYearTable}
					/>
				</table>
			)}
			{showMonthTable && (
				<table className='table table-sm table-striped text-center'>
					<Month
						months={moment.months()}
						date={date}
						setDate={setDate}
						setShowDayTable={setShowDayTable}
						setShowMonthTable={setShowMonthTable}
					/>
				</table>
			)}
			{showDayTable && (
				<table className='table table-sm table-striped text-center'>
					<thead className='thead-dark'>
						<tr>{weekdaysShortName}</tr>
					</thead>

					<Day date={date} />
				</table>
			)}
		</div>
	)
}

export default Calendar
