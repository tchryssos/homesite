import React from 'react'
import injectSheet from 'react-jss'

import Sprite from 'components/Sprite'
import { TROY } from 'constants/sprites'
import street from 'static/street_purp.png'

const styles = {
	artContainer: {
		width: '100%',
		position: 'relative',
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
}

const PixelContent = ({ objectSprite, classes }) => (
	<div className={classes.artContainer}>
		<div className={classes.spriteContainer}>
			<Sprite type={TROY} className={classes.troySprite} />
			<Sprite type={objectSprite} className={classes.objectSprite} />
		</div>
		<div className={classes.sidewalk} />
	</div>
)

export default injectSheet(styles)(PixelContent)
