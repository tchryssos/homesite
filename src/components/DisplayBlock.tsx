import React from 'react'
import { createUseStyles } from 'react-jss'

import Body from 'components/Body'
import LittleTitle from 'components/LittleTitle'

import { black, white, darkPurple } from 'constants/styles/colors'

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
		boxShadow: [[4, 4, darkPurple]],
		wordBreak: 'break-word',
		'&:hover': {
			transform: 'translate(-4px, -4px)',
			boxShadow: [[8, 8, darkPurple]],
		},
		'&:active': {
			transform: 'translate(-4px, -4px)',
			boxShadow: [[8, 8, darkPurple]],
		},
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
	return (
		<a
			href={to}
			target="_blank"
			rel="noreferrer"
			className={classes.blockLink}
		>
			<div className={classes.block}>
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
