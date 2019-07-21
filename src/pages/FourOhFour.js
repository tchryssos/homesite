import React from 'react'
import injectSheet from 'react-jss'

import { QUESTIONMAN } from 'constants/sprites'
import { xlFont } from 'constants/styles/fonts'
import Sprite from 'components/Sprite'

const styles = {
	container: {
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
		<Sprite type={QUESTIONMAN} />
		<div className={classes.container}>
			<span className={classes.fourOhFour}>404</span>
		</div>
	</>
)

export default injectSheet(styles)(FourOhFour)
