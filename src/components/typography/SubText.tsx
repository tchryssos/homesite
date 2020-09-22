import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

import { monoFont, sansFont } from 'constants/styles/fonts'
import { white } from 'constants/styles/colors'

interface Props {
	className?: string,
	decorative?: boolean,
	children: React.ReactNode,
}

const useStyles = createUseStyles({
	subText: {
		color: white,
		fontSize: 12,
		fontFamily: sansFont,
	},
	decorative: {
		fontSize: 14,
		fontFamily: monoFont,
	},
})

const SubText: React.FC<Props> = ({ children, decorative, className }) => {
	const classes = useStyles()
	return (
		<p
			className={clsx(
				classes.subText,
				{ [classes.decorative]: decorative },
				className,
			)}
		>
			{children}
		</p>
	)
}

export default SubText

