import React from 'react'
import injectSheet from 'react-jss'
import { NavLink } from 'react-router-dom'
import { black } from 'constants/styles/colors'
import { lgFont, mdFont } from 'constants/styles/fonts'

const styles = {
	nameWrapper: {
		...lgFont,
		margin: '16px',
		fontStyle: 'italic',
		textShadow: `2px -4px ${black}`,
	},
	navWrapper: {
		margin: '16px',
		textShadow: `2px -2px ${black}`,
	},
	link: {
		...mdFont,
		textDecoration: 'none',
		marginRight: '16px',
	},
	navActive: {
		textDecoration: [['underline'], '!important'],
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
