import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

import { smFont } from 'constants/styles/fonts'

const useStyles = createUseStyles({
	body: {
		...smFont,
	},
})

export default ({ children, className }) => {
	const classes = useStyles()
	return (
		<p className={clsx(classes.body, className)}>{children}</p>
	)
}
