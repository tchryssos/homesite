import React, { useContext } from 'react'
import { createUseStyles, WithStylesProps } from 'react-jss'
import { NavLink, useLocation } from 'react-router-dom'
import clsx from 'clsx'

import { black, white } from 'constants/styles/colors'
import { sansFont } from 'constants/styles/fonts'
import { SM_MIN_STRING, MD_MIN_STRING } from 'constants/styles/breakpoints'
import { HOME_PATH, PORTFOLIO_PATH } from 'constants/routes'

import AnimationContext from 'logic/contexts/animation'

import Body from 'components/typography/Body'


const useStyles = createUseStyles({
	nameWrapper: {
		margin: 16,
		marginTop: 0,
		paddingTop: 16,
		fontStyle: 'italic',
		textShadow: [[1, -2, black]],
	},
	navWrapper: {
		textShadow: [[1, -1, black]],
		display: 'flex',
		justifyContent: 'space-evenly',
		width: '100%',
		marginBottom: 16,
		[SM_MIN_STRING]: {
			paddingLeft: 16,
			justifyContent: 'flex-start',
		},
		[MD_MIN_STRING]: {
			textShadow: [[2, -2, black]],
		},
	},
	link: {
		fontFamily: sansFont,
		color: white,
		fontSize: 28,
		textDecoration: 'none',
		[SM_MIN_STRING]: {
			marginRight: 16,
		},
	},
	navActive: {
		textDecoration: [['underline'], '!important'],
	},
	disabledLink: {
		opacity: 0.6,
		'&:hover': {
			cursor: 'wait',
		},
	},
})
interface Props extends WithStylesProps<typeof useStyles> {
	to: string,
	children: React.ReactNode,
}

const NavText: React.FC<Props> = ({ to, classes, children }) => {
	const { pathname } = useLocation()
	const { isAnimating } = useContext(AnimationContext)
	if (isAnimating) {
		return (
			<p
				className={clsx(
					classes.link,
					classes.disabledLink,
					{ [classes.navActive]: pathname === to },
				)}
			>
				{children}
			</p>
		)
	}
	return (
		<NavLink
			exact
			className={classes.link}
			activeClassName={classes.navActive}
			to={to}
		>
			{children}
		</NavLink>
	)
}

const NavBar: React.FC = () => {
	const classes = useStyles()
	return (
		<>
			<Body decorative className={classes.nameWrapper}>
				Troy Chryssos
			</Body>
			<div className={classes.navWrapper}>
				<NavText to={HOME_PATH} classes={classes}>
					Home
				</NavText>
				<NavText to={PORTFOLIO_PATH} classes={classes}>
					Portfolio
				</NavText>
			</div>
		</>
	)
}

export default NavBar
