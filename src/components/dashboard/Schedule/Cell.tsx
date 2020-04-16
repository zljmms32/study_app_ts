import React from 'react'
import classnames from 'classnames'
import styles from './Schedule.module.css'

type CellProps = {
	content?: string
}

const Cell: React.FC<CellProps> = ({ content }) => {
	return (
		<td className={classnames(styles.cell, 'text-nowrap overflow-hidden')}>
			{content === undefined ? '' : content}
		</td>
	)
}

export default Cell
