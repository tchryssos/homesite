import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

interface Props {
	className?: string,
	viewBox?: string,
	children: React.ReactNode,
}

const useStyles = createUseStyles({
	svg: {
		height: '100%',
		width: '100%',
	},
})

const Icon: React.FC<Props> = ({
	viewBox = '0 0 24 24',
	className,
	children,
}) => {
	const classes = useStyles()
	return (
		<svg
			className={clsx(classes.svg, className)}
			viewBox={viewBox}
			xmlns="http://www.w3.org/2000/svg"
		>
			{children}
		</svg>
	)
}

export default Icon
