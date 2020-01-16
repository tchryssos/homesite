import React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'

import {
	TROY, TROY_RIGHT, JUKEBOX, LAPTOP, CANE,
} from 'constants/sprites'

import dumbCane from 'static/dumbcane.gif'
import jukebox from 'static/jukebox.gif'
import laptop from 'static/laptop.gif'
import questionMan from 'static/questionman.gif'
import troy from 'static/troy.gif'
import troyRight from 'static/troy_right.gif'

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
		case TROY_RIGHT:
			return troyRight
		case JUKEBOX:
			return jukebox
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
				classNames(
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
