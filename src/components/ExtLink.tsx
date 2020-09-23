import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import { white } from 'constants/styles/colors'

interface Props {
	to: string,
	download?: boolean,
	className?: string,
	children: React.ReactNode,
}

const useStyles = createUseStyles({
	link: {
		textDecoration: 'none',
		color: white,
		'&:hover': {
			cursor: 'pointer',
		},
	},
})

const ExtLink: React.FC<Props> = ({ to, download, className, children }) => {
	const classes = useStyles()
	return (
		<a
			href={to}
			download={download}
			className={clsx(classes.link, className)}
			target="_blank"
			rel="noreferrer"
		>
			{children}
		</a>
	)
}

export default ExtLink
