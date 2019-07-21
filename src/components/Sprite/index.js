import React from 'react'
import classNames from 'classnames'
import injectSheet from 'react-jss'

import {
	TROY, TROY_RIGHT, JUKEBOX, LAPTOP, CANE,
} from 'constants/sprites'

import dumbCane from 'static/dumbcane.gif'
import jukebox from 'static/jukebox.gif'
import laptop from 'static/laptop.gif'
import questionMan from 'static/questionman.gif'
import troy from 'static/troy.gif'
import troyRight from 'static/troy_right.gif'

const styles = {
	spriteContainer: {
		maxWidth: ({ maxWidth = 128 }) => `${maxWidth}px`,
		display: 'flex',
		alignItems: 'flex-end',
	},
	sprite: {
		width: '100%',
	},
}

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

const Sprite = ({ type, className, classes }) => (
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

export default injectSheet(styles)(Sprite)
