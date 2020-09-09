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
}

const useStyles = createUseStyles({
	block: {
		borderRadius: 4,
		backgroundColor: black,
		border: [[1, 'solid', white]],
		display: 'flex',
		flexDirection: 'column',
		maxWidth: 256,
		padding: 8,
		boxShadow: [[4, 4, darkPurple]],
		wordBreak: 'break-word',
		marginRight: 16,
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
	title, text, altText, imageSrc,
}) => {
	const classes = useStyles()
	return (
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
	)
}

export default DisplayBlock
