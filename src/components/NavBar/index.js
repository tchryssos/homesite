import React from 'react'
import injectSheet from 'react-jss'
import { NavLink } from 'react-router-dom'
import { black } from 'constants/styles/colors'
import { lgFont, mdFont, smFont, xsFont } from 'constants/styles/fonts'
import { MD_MIN_STRING } from 'constants/styles/breakpoints'

const styles = {
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
		...smFont,
		textDecoration: 'none',
	},
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
}

const NavBar = ({ classes }) => (
	<>
		<div className={classes.nameWrapper}>
			Troy Chryssos
		</div>
		<div className={classes.navWrapper}>
			<NavLink
				exact
				style={styles.link}
				activeClassName={classes.navActive}
				to="/"
			>
				Home
			</NavLink>
			<NavLink
				exact
				style={styles.link}
				activeClassName={classes.navActive}
				to="/code"
			>
				Code
			</NavLink>
			<NavLink
				exact
				style={styles.link}
				activeClassName={classes.navActive}
				to="/audio"
			>
				Audio
			</NavLink>
		</div>
	</>
)

export default injectSheet(styles)(NavBar)
