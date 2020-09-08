import React from 'react'
import { createUseStyles } from 'react-jss'

import { QUESTIONMAN } from 'constants/sprites'
import { xlFont } from 'constants/styles/fonts'
import PixelContent from 'components/PixelContent'

const useStyles = createUseStyles({
	fourOhFourContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	fourOhFour: {
		...xlFont,
	},
})

const FourOhFour = () => {
	const classes = useStyles()
	return (
		<>
			<PixelContent objectSprite={QUESTIONMAN} />
			<div className={classes.fourOhFourContainer}>
				<span className={classes.fourOhFour}>404</span>
			</div>
		</>
	)
}

export default FourOhFour
