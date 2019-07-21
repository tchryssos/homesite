import React from 'react'
import injectSheet from 'react-jss'

import { QUESTIONMAN } from 'constants/sprites'
import { xlFont } from 'constants/styles/fonts'
import PixelContent from 'components/PixelContent'

const styles = {
	fourOhFourContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	fourOhFour: {
		...xlFont,
	},
}

const FourOhFour = ({ classes }) => (
	<>
		<PixelContent objectSprite={QUESTIONMAN} />
		<div className={classes.fourOhFourContainer}>
			<span className={classes.fourOhFour}>404</span>
		</div>
	</>
)

export default injectSheet(styles)(FourOhFour)
