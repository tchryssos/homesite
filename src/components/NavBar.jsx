import React from 'react'
import { createUseStyles } from 'react-jss'
import { NavLink } from 'react-router-dom'
import { black } from 'constants/styles/colors'
import {
	lgFont, mdFont, xsFont,
} from 'constants/styles/fonts'
import { SM_MIN_STRING, MD_MIN_STRING } from 'constants/styles/breakpoints'

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
	link: {
		...mdFont,
		textDecoration: 'none',
	},
	navActive: {
		textDecoration: [['underline'], '!important'],
	},
	[SM_MIN_STRING]: {
		link: {
			marginRight: 16,
		},
		navWrapper: {
			marginLeft: '16px',
			justifyContent: 'flex-start',
		},
	},
	[MD_MIN_STRING]: {
		nameWrapper: {
			...lgFont,
			textShadow: `2px -4px ${black}`,
		},
		navWrapper: {
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
					className={classes.link}
					activeClassName={classes.navActive}
					to="/"
				>
					Home
				</NavLink>
				<NavLink
					exact
					className={classes.link}
					activeClassName={classes.navActive}
					to="/code"
				>
					Code
				</NavLink>
			</div>
		</>
	)
}
