import React from 'react'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

import {
	TROY, LAPTOP, CANE,
} from 'constants/sprites'

import dumbCane from 'static/dumbcane.gif'
import laptop from 'static/laptop.gif'
import questionMan from 'static/questionman.gif'
import troy from 'static/troy.gif'

const useStyles = createUseStyles({
	spriteContainer: {
		maxWidth: 128,
		display: 'flex',
		alignItems: 'flex-end',
	},
	sprite: {
		width: '100%',
	},
})

const spriteSwitch = (type) => {
	switch (type) {
		case TROY:
			return troy
		case LAPTOP:
			return laptop
		case CANE:
			return dumbCane
		default:
			return questionMan
	}
}

export default ({ type, className }) => {
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
				className={classes.sprite}
				alt={`A sprite of ${type}`}
			/>
		</div>
	)
}
