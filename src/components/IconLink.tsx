import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import ExtLink from 'components/ExtLink'

import { white, dimmedWhite } from 'constants/styles/colors'

interface Props {
	className?: string,
	children: (arg0: string, arg1: string) => React.ReactNode,
	to: string | undefined,
}

const useStyles = createUseStyles({
	iconLink: {
		height: 44,
		width: 44,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		zIndex: 2,
		'&:hover $iconChildColor': {
			fill: dimmedWhite,
		},
		'&:active $iconChildColor': {
			fill: dimmedWhite,
		},
	},
	iconChild: {
		height: [[28], '!important'],
		width: [[28], '!important'],
	},
	iconChildColor: {
		fill: white,
	},
})

const IconLink: React.FC<Props> = ({ to, className, children }) => {
	const classes = useStyles()
	return (
		<ExtLink to={to} className={clsx(classes.iconLink, className)}>
			{children(classes.iconChild, classes.iconChildColor)}
		</ExtLink>
	)
}

export default IconLink
