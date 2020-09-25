import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

import { useShadowStyles } from 'logic/util/styles/shadow'

import { monoFont } from 'constants/styles/fonts'
import { white } from 'constants/styles/colors'
import { SM_MIN_STRING } from 'constants/styles/breakpoints'

interface Props {
	className?: string,
	children: React.ReactNode,
}

const useStyles = createUseStyles({
	h3: {
		color: white,
		fontSize: 22,
		fontFamily: monoFont,
		[SM_MIN_STRING]: {
			fontSize: 24,
		},
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
