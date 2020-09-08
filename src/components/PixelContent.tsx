import React from 'react'
import { createUseStyles } from 'react-jss'

import Sprite from 'components/Sprite'
import { TROY } from 'constants/sprites'
import street from 'static/street_purp.png'

interface Props {
	objectSprite: string,
}

const useStyles = createUseStyles({
	artContainer: {
		width: '100%',
		position: 'relative',
		marginBottom: 48,
	},
	spriteContainer: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
	},
	spriteWrapper: {
		display: 'flex',
		minWidth: 256,
	},
	troySprite: {
		zIndex: 3,
	},
	objectSprite: {
		zIndex: 2,
		marginBottom: 20,
	},
	sidewalk: {
		position: 'absolute',
		top: 130,
		width: '100%',
		height: 150,
		background: `url('${street}')`,
		backgroundSize: 'contain',
	},
})

const PixelContent: React.FC<Props> = ({ objectSprite }) => {
	const classes = useStyles()
	return (
		<div className={classes.artContainer}>
			<div className={classes.spriteContainer}>
				<div className={classes.spriteWrapper}>
					<Sprite type={TROY} className={classes.troySprite} />
					<Sprite type={objectSprite} className={classes.objectSprite} />
				</div>
			</div>
			<div className={classes.sidewalk} />
		</div>
	)
}

export default PixelContent
