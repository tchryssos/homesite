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
		margin: 16,
		fontStyle: 'italic',
		textShadow: [[1, -2, black]],
	},
	navWrapper: {
		textShadow: [[1, -1, black]],
		display: 'flex',
		justifyContent: 'space-around',
		width: '100%',
		marginBottom: 16,
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
			paddingLeft: 16,
			justifyContent: 'flex-start',
		},
	},
	[MD_MIN_STRING]: {
		nameWrapper: {
			...lgFont,
			textShadow: [[2, -4, black]],
		},
		navWrapper: {
			textShadow: [[2, -2, black]],
		},
	},
})

const NavBar: React.FC = () => {
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

export default NavBar
