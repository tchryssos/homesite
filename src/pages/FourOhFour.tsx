import React from 'react'
import { createUseStyles } from 'react-jss'
import { xlFont } from 'constants/styles/fonts'

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
			<div className={classes.fourOhFourContainer}>
				<span className={classes.fourOhFour}>404</span>
			</div>
		</>
	)
}

export default FourOhFour
