import React from 'react'
import { SplitButton, Dropdown } from 'react-bootstrap'

const CurrentStudentCard: React.FC = () => {
	return (
		<SplitButton
			id={`dropdown-split-variants`}
			variant='primary'
			title='zhu'
		>
			<Dropdown.Item eventKey='1'>Action</Dropdown.Item>
			<Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
			<Dropdown.Item eventKey='3' active>
				Active Item
			</Dropdown.Item>
			<Dropdown.Divider />
			<Dropdown.Item eventKey='4'>Separated link</Dropdown.Item>
		</SplitButton>
	)
}

export default CurrentStudentCard
