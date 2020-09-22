import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

import { xsFont } from 'constants/styles/fonts'

interface Props {
	className?: string,
	children: React.ReactNode,
}

const useStyles = createUseStyles({
	subText: {
		...xsFont,
	},
})

const SubText: React.FC<Props> = ({ children, className }) => {
	const classes = useStyles()
	return (
		<p className={clsx(classes.subText, className)}>{children}</p>
	)
}

export default SubText

