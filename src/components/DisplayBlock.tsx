import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import Body from 'components/typography/Body'
import LittleTitle from 'components/typography/LittleTitle'

import { black, white } from 'constants/styles/colors'
import { useShadowStyles } from 'constants/styles/shadow'

interface Props {
	title: string,
	text: string,
	altText?: string,
	imageSrc?: string,
	to: string,
}

const useStyles = createUseStyles({
	blockLink: {
		textDecoration: 'none',
	},
	block: {
		height: '100%',
		borderRadius: 4,
		backgroundColor: black,
		border: [[1, 'solid', white]],
		display: 'flex',
		flexDirection: 'column',
		padding: 8,
		wordBreak: 'break-word',
	},
	header: {
		display: 'flex',
		alignItems: 'center',
	},
	image: {
		height: 40,
		width: 40,
		marginRight: 16,
	},
})

const DisplayBlock: React.FC<Props> = ({
	title, text, altText, imageSrc, to,
}) => {
	const classes = useStyles()
	const shadowClasses = useShadowStyles()
	return (
		<a
			href={to}
			target="_blank"
			rel="noreferrer"
			className={classes.blockLink}
		>
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
				</div>
				<Body>{text}</Body>
			</div>
		</a>
	)
}

export default DisplayBlock
