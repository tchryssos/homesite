import React, { useContext, useState } from 'react'
import { createUseStyles, WithStylesProps } from 'react-jss'
import { NavLink, useLocation } from 'react-router-dom'
import { black, lightGrey } from 'constants/styles/colors'
import {
	lgFont, mdFont, xsFont,
} from 'constants/styles/fonts'
import { SM_MIN_STRING, MD_MIN_STRING } from 'constants/styles/breakpoints'
import { HOME_PATH, CODE_PATH } from 'constants/routes'
import AnimationContext from 'logic/contexts/animation'
import clsx from 'clsx'

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
	disabledLink: {
		opacity: 0.6,
		'&:hover': {
			cursor: 'wait',
		},
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
			<div className={classes.nameWrapper}>
				Troy Chryssos
			</div>
			<div className={classes.navWrapper}>
				<NavText to={HOME_PATH} classes={classes}>
					Home
				</NavText>
				<NavText to={CODE_PATH} classes={classes}>
					Code
				</NavText>
			</div>
		</>
	)
}

export default NavBar
