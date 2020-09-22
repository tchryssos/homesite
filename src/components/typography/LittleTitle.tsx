import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

import { monoFont } from 'constants/styles/fonts'
import { white } from 'constants/styles/colors'

interface Props {
	className?: string,
	children: React.ReactNode,
}

const useStyles = createUseStyles({
	h3: {
		color: white,
		fontSize: 24,
		fontFamily: monoFont,
	},
})

const LittleTitle: React.FC<Props> = ({ children, className }: Props) => {
	const classes = useStyles()
	return (
		<h3 className={clsx(classes.h3, className)}>{children}</h3>
	)
}

export default LittleTitle
