import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

import { useShadowStyles } from 'logic/util/styles/shadow'

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
	const shadowClasses = useShadowStyles()
	return (
		<h3
			className={clsx(
				classes.h3,
				shadowClasses.textShadow,
				className,
			)}
		>
			{children}
		</h3>
	)
}

export default LittleTitle
