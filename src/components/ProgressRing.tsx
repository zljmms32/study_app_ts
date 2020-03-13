import React from 'react'

type ProgressRingProps = {
	radius?: number
	stroke?: number
	progress: number
}

const ProgressRing: React.FC<ProgressRingProps> = ({
	radius = 40,
	stroke = 6,
	progress,
}) => {
	const normalizedRadius = radius - stroke * 2
	const circumference = 2 * Math.PI * normalizedRadius
	const strokeDashoffset = -circumference + (progress / 100) * circumference

	return (
		<svg height={radius * 2} width={radius * 2}>
			<circle
				stroke='yellow'
				fill='transparent'
				strokeWidth={stroke}
				strokeDasharray={circumference + ' ' + circumference}
				style={{ strokeDashoffset }}
				r={normalizedRadius}
				cx={radius}
				cy={radius}
			/>
			<text x='50%' y='50%' dominantBaseline='middle' textAnchor='middle'>
				{`${progress}%`}
			</text>
		</svg>
	)
}

export default ProgressRing
