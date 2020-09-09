import React, { useEffect, useContext, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { useLocation } from 'react-router-dom'

import AnimationContext from 'logic/contexts/animation'

import Sprite from 'components/Sprite'

import {
	TROY, QUESTIONMAN, LAPTOP, CANE, TROY_RIGHT,
} from 'constants/sprites'
import { HOME_PATH, CODE_PATH } from 'constants/routes'

import street from 'static/street_purp.png'

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

const pathToSprite = (path: string) => {
	switch (path) {
		case HOME_PATH:
			return CANE
		case CODE_PATH:
			return LAPTOP
		default:
			return QUESTIONMAN
	}
}

const PixelContent: React.FC = () => {
	const classes = useStyles()
	const { pathname } = useLocation()
	const { isAnimating } = useContext(AnimationContext)
	const [currentSprite, setCurrentSprite] = useState(pathToSprite(pathname))
	const [prevSprite, setPrevSprite] = useState('')

	useEffect(() => {
		setPrevSprite(currentSprite)
		setCurrentSprite(pathToSprite(pathname))
	}, [pathname])

	return (
		<div className={classes.artContainer}>
			<div className={classes.spriteContainer}>
				<div className={classes.spriteWrapper}>
					<Sprite type={isAnimating ? TROY_RIGHT : TROY} className={classes.troySprite} />
					<Sprite type={currentSprite} className={classes.objectSprite} />
					{isAnimating && (
						<Sprite
							type={prevSprite}
							className={classes.objectSprite}
						/>
					)}
				</div>
			</div>
			<div className={classes.sidewalk} />
		</div>
	)
}

export default PixelContent
