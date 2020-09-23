import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import Body from 'components/typography/Body'
import LittleTitle from 'components/typography/LittleTitle'
import Github from 'components/icons/Github'
import ExtLink from 'components/ExtLink'

import { black, white } from 'constants/styles/colors'
import { useShadowStyles } from 'logic/util/styles/shadow'

interface Props {
	title: string,
	text: string,
	altText?: string,
	imageSrc?: string,
	to: string,
}

const useStyles = createUseStyles({
	block: {
		height: '100%',
		borderRadius: 4,
		backgroundColor: black,
		border: [[2, 'solid', white]],
		display: 'flex',
		flexDirection: 'column',
		padding: 8,
		wordBreak: 'break-word',
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: 8,
		width: '100%',
	},
	image: {
		height: 40,
		width: 40,
		marginRight: 16,
	},
	github: {
		alignSelf: 'flex-end',
		height: 28,
		width: 28,
	},
})

const DisplayBlock: React.FC<Props> = ({
	title, text, altText, imageSrc, to,
}) => {
	const classes = useStyles()
	const shadowClasses = useShadowStyles()
	return (
		<ExtLink to={to}>
			<div
				className={clsx(
					classes.block,
					shadowClasses.shadow,
					shadowClasses.hoverShadow,
				)}
			>
				<div className={classes.header}>
					<img
						src={imageSrc}
						alt={altText}
						className={classes.image}
					/>
					<LittleTitle>{title}</LittleTitle>

					<Github className={classes.github} />
				</div>
				<Body>{text}</Body>
			</div>
		</ExtLink>
	)
}

export default DisplayBlock
