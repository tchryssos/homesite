import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

import { smFont } from 'constants/styles/fonts'

interface Props {
	className?: string,
	children: React.ReactNode,
}

const useStyles = createUseStyles({
	body: {
		...smFont,
	},
})

const Body: React.FC<Props> = ({ children, className }: Props) => {
	const classes = useStyles()
	return (
		<p className={clsx(classes.body, className)}>{children}</p>
	)
}

export default Body
