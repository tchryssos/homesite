import React, {
	useEffect, useContext, useState,
} from 'react'
import { createUseStyles } from 'react-jss'
import { useLocation } from 'react-router-dom'
import clsx from 'clsx'

import AnimationContext from 'logic/contexts/animation'
import WindowContext from 'logic/contexts/window'

import Sprite from 'components/Sprite'

import {
	TROY, QUESTIONMAN, LAPTOP, CANE, TROY_RIGHT,
} from 'constants/sprites'
import { HOME_PATH, CODE_PATH } from 'constants/routes'
import { PAGE_TRANSITION_TIME } from 'constants/animation'

import { streetDisplayHeight, getWalkAnimationDistance } from 'logic/util/animation'

import street from 'static/street_purp_sm.png'

const useStyles = createUseStyles({
	artContainer: {
		width: '100%',
		position: 'relative',
		overflow: 'hidden',
	},
	animationScroller: {
		display: 'flex',
		height: 240,
	},
	spriteContainer: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		minWidth: 256,
	},
	troySprite: {
		zIndex: 3,
	},
	objectSprite: {
		zIndex: 2,
		paddingBottom: 20,
	},
	sidewalk: {
		position: 'absolute',
		width: '300%',
		top: 124,
		height: streetDisplayHeight,
		background: `url('${street}')`,
		backgroundSize: 'contain',
		backgroundRepeat: 'repeat',
		justifySelf: 'flex-start',
	},
})

const useAnimatingStyles = createUseStyles({
	// transforms are set as an inline style
	scrollerAnimated: {
		transition: `transform ${PAGE_TRANSITION_TIME}ms linear`,
	},
	currSprite: {
		position: 'absolute',
		height: '100%',
	},
	animatedTroy: {
		transition: `transform ${PAGE_TRANSITION_TIME}ms linear`,
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
	const { windowSize } = useContext(WindowContext)
	const animationDistance = getWalkAnimationDistance(windowSize)

	const [currentSprite, setCurrentSprite] = useState(pathToSprite(pathname))
	const [prevSprite, setPrevSprite] = useState('')

	const setInlineTransform = (translate: number) => {
		if (isAnimating) {
			return {
				transform: `translateX(${translate}px)`,
			}
		}
		return {}
	}

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
				style={setInlineTransform(animationDistance * -1)}
			>
				<div className={classes.spriteContainer}>
					<Sprite
						type={isAnimating ? TROY_RIGHT : TROY}
						className={clsx(
							classes.troySprite,
							{ [animatingClasses.animatedTroy]: isAnimating },
						)}
						style={setInlineTransform(animationDistance)}
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
							style={setInlineTransform(animationDistance + 64)}
						/>
					)}
				</div>
				<div className={classes.sidewalk} />
			</div>
		</div>
	)
}

export default PixelContent
