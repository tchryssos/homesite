import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

import {
	TROY, LAPTOP, CANE, TROY_RIGHT,
} from 'constants/sprites'

import dumbCane from 'static/dumbcane.gif'
import laptop from 'static/laptop.gif'
import questionMan from 'static/questionman.gif'
import troy from 'static/troy.gif'
import troyRight from 'static/troy_right.gif'

interface Props {
	type: string,
	style?: {},
	className?: string,
}

const useStyles = createUseStyles({
	spriteContainer: {
		maxWidth: 128,
		maxHeight: 190,
		display: 'flex',
		alignItems: 'flex-end',
	},
	sprite: {
		width: '100%',
	},
	troySprite: {
		height: '100%',
		width: 'unset',
	},
})

const spriteSwitch = (type: string) => {
	switch (type) {
		case TROY:
			return troy
		case TROY_RIGHT:
			return troyRight
		case LAPTOP:
			return laptop
		case CANE:
			return dumbCane
		default:
			return questionMan
	}
}

const Sprite: React.FC<Props> = ({ type, style = {}, className }) => {
	const classes = useStyles()
	return (
		<div
			className={
				clsx(
					classes.spriteContainer,
					className,
				)
			}
		>
			<img
				src={spriteSwitch(type)}
				className={clsx(
					classes.sprite,
					{ [classes.troySprite]: type === TROY || type === TROY_RIGHT },
				)}
				alt={`A sprite of ${type}`}
				style={style}
			/>
		</div>
	)
}

export default Sprite
