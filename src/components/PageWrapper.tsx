import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

interface Props {
	className?: string,
	children: React.ReactNode,
}

const useStyles = createUseStyles({
	pageWrapper: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
})

const PageWrapper: React.FC<Props> = ({ children, className }) => {
	const classes = useStyles()
	return (
		<div className={clsx(classes.pageWrapper, className)}>
			{children}
		</div>
	)
}

export default PageWrapper
