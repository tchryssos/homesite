import React from 'react'
import { createUseStyles } from 'react-jss'

import Sprite from 'components/Sprite'
import { TROY } from 'constants/sprites'
import street from 'static/street_purp.png'

const useStyles = createUseStyles({
	artContainer: {
		width: '100%',
		position: 'relative',
		marginBottom: '48px',
	},
	spriteContainer: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
	},
	troySprite: {
		zIndex: 3,
	},
	objectSprite: {
		zIndex: 2,
		marginBottom: '20px',
	},
	sidewalk: {
		position: 'absolute',
		top: '130px',
		width: '100%',
		height: '150px',
		background: `url('${street}')`,
		backgroundSize: 'contain',
	},
})

export default ({ objectSprite }) => {
	const classes = useStyles()
	return (
		<div className={classes.artContainer}>
			<div className={classes.spriteContainer}>
				<Sprite type={TROY} className={classes.troySprite} />
				<Sprite type={objectSprite} className={classes.objectSprite} />
			</div>
			<div className={classes.sidewalk} />
		</div>
	)	
}