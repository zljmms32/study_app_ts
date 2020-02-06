/* eslint-disable @typescript-eslint/member-delimiter-style */
import React from 'react'

type Message = {
	text: string
	messageType: string
}

const InlineMessage: React.FC<Message> = ({ text, messageType }) => {
	return <span className={`text-${messageType}`}>{text}</span>
}

export default InlineMessage
