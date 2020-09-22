import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

import { mdFont } from 'constants/styles/fonts'

interface Props {
	className?: string,
	children: React.ReactNode,
}

const useStyles = createUseStyles({
	h3: {
		...mdFont,
	},
})

const Title: React.FC<Props> = ({ children, className }: Props) => {
	const classes = useStyles()
	return (
		<h2 className={clsx(classes.h3, className)}>{children}</h2>
	)
}

export default Title
