import React from 'react'
import { createUseStyles } from 'react-jss'
import { NavLink } from 'react-router-dom'
import { black } from 'constants/styles/colors'
import {
	lgFont, smFont, xsFont,
} from 'constants/styles/fonts'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

const linkStyles = {
	...smFont,
	textDecoration: 'none',
	marginRight: 8,
}

const useStyles = createUseStyles({
	nameWrapper: {
		...xsFont,
		margin: '16px',
		fontStyle: 'italic',
		textShadow: `1px -2px ${black}`,
	},
	navWrapper: {
		textShadow: `1px -1px ${black}`,
		display: 'flex',
		justifyContent: 'space-around',
		width: '100%',
		marginBottom: '16px',
	},
	link: linkStyles,
	navActive: {
		textDecoration: [['underline'], '!important'],
	},
	[MD_MIN_STRING]: {
		nameWrapper: {
			...lgFont,
			textShadow: `2px -4px ${black}`,
		},
		navWrapper: {
			justifyContent: 'flex-start',
			marginLeft: '16px',
			textShadow: `2px -2px ${black}`,
		},
	},
})

export default () => {
	const classes = useStyles()
	return (
		<>
			<div className={classes.nameWrapper}>
				Troy Chryssos
			</div>
			<div className={classes.navWrapper}>
				<NavLink
					exact
					style={linkStyles}
					activeClassName={classes.navActive}
					to="/"
				>
					Home
				</NavLink>
				<NavLink
					exact
					style={linkStyles}
					activeClassName={classes.navActive}
					to="/code"
				>
					Code
				</NavLink>
			</div>
		</>
	)
}
