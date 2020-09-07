import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

import { smFont } from 'constants/styles/fonts'

const useStyles = createUseStyles({
	h3: {
		...smFont,
	},
})

export default ({ children, className }) => {
	const classes = useStyles()
	return (
		<h3 className={clsx(classes.h3, className)}>{children}</h3>
	)
}
