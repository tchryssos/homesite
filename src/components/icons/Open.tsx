import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import Icon from 'components/icons/Icon'

import { white } from 'constants/styles/colors'

interface Props {
	className?: string,
	colorClassName?: string,
	title: string,
	titleId: string,
}

const useStyles = createUseStyles({
	path: {
		fill: white,
	},
})

const Open: React.FC<Props> = ({
	className, colorClassName, title, titleId,
}) => {
	const classes = useStyles()
	return (
		<Icon className={className} title={title} titleId={titleId}>
			<path
				className={clsx(classes.path, colorClassName)}
				d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z"
			/>
		</Icon>
	)
}

export default Open
