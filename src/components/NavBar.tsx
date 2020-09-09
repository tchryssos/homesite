import React, { useContext } from 'react'
import { createUseStyles, WithStylesProps } from 'react-jss'
import { NavLink, useLocation } from 'react-router-dom'
import { black } from 'constants/styles/colors'
import {
	lgFont, mdFont, smFont,
} from 'constants/styles/fonts'
import { SM_MIN_STRING, MD_MIN_STRING } from 'constants/styles/breakpoints'
import { HOME_PATH, CODE_PATH } from 'constants/routes'
import AnimationContext from 'logic/contexts/animation'
import clsx from 'clsx'

const useStyles = createUseStyles({
	nameWrapper: {
		...smFont,
		margin: 16,
		marginTop: 0,
		paddingTop: 16,
		fontStyle: 'italic',
		textShadow: [[1, -2, black]],
		[MD_MIN_STRING]: {
			...lgFont,
			textShadow: [[2, -4, black]],
		},
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
		...mdFont,
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
