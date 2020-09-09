import React, { useEffect, useContext, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { useLocation } from 'react-router-dom'
import clsx from 'clsx'

import AnimationContext from 'logic/contexts/animation'

import Sprite from 'components/Sprite'

import {
	TROY, QUESTIONMAN, LAPTOP, CANE, TROY_RIGHT,
} from 'constants/sprites'
import { HOME_PATH, CODE_PATH } from 'constants/routes'
import { PAGE_TRANSITION_TIME } from 'constants/animation'

import street from 'static/street_purp_sm.png'

const useStyles = createUseStyles({
	artContainer: {
		width: '100%',
		position: 'relative',
		overflow: 'hidden',
	},
	animationScroller: {
		display: 'flex',
		justifyContent: 'center',
		height: 240,
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
		width: '100%',
		minWidth: 5000,
		top: 130,
		height: 150,
		background: `url('${street}')`,
		backgroundSize: 'contain',
	},
})

const animationDistance = 1000
const useAnimatingStyles = createUseStyles({
	scrollerAnimated: {
		transform: `translateX(-${animationDistance}px)`,
		transition: `transform ${PAGE_TRANSITION_TIME}ms`,
	},
	currSprite: {
		transform: `translateX(${animationDistance + 128}px)`, // +128 avoids troy sprite
		position: 'absolute',
		top: -20, // copies marginBottom 20
		height: '100%',
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
	const animatingClasses = useAnimatingStyles()
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
			<div
				className={clsx(
					classes.animationScroller,
					{ [animatingClasses.scrollerAnimated]: isAnimating },
				)}
			>
				<div className={classes.spriteContainer}>
					<div className={classes.spriteWrapper}>
						<Sprite
							type={isAnimating ? TROY_RIGHT : TROY}
							className={classes.troySprite}
						/>
						<Sprite
							type={isAnimating ? prevSprite : currentSprite}
							className={classes.objectSprite}
						/>
						{isAnimating && (
							<Sprite
								type={currentSprite}
								className={clsx(
									classes.objectSprite,
									animatingClasses.currSprite,
								)}
							/>
						)}
					</div>
				</div>
				<div className={classes.sidewalk} />
			</div>
		</div>
	)
}

export default PixelContent
