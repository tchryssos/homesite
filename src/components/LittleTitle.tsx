import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

import { smFont } from 'constants/styles/fonts'

interface Props {
	className?: string,
	children: React.ReactNode,
}

const useStyles = createUseStyles({
	h3: {
		...smFont,
	},
})

const LittleTitle: React.FC<Props> = ({ children, className }) => {
	const classes = useStyles()
	return (
		<h3 className={clsx(classes.h3, className)}>{children}</h3>
	)
}

export default LittleTitle
