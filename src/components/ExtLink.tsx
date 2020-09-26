import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import ternary from 'logic/util/ternary'

import { white } from 'constants/styles/colors'

type Props = {
	to: string | undefined,
	download?: boolean,
	className?: string,
	children: React.ReactNode,
	alt?: string,
} | {
	to: string | undefined,
	download?: boolean,
	className?: string,
	alt: string,
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

const ExtLink: React.FC<Props> = ({
	to, download, className, children, alt,
}) => {
	const classes = useStyles()
	return ternary(
		Boolean(to),
		(
			<a
				href={to}
				download={download}
				className={clsx(classes.link, className)}
				target="_blank"
				rel="noreferrer"
				aria-label={alt}
			>
				{children}
			</a>
		),
		children,
	)
}

export default ExtLink
