import React, { useContext } from 'react'
import { createUseStyles, WithStylesProps } from 'react-jss'
import { NavLink, useLocation } from 'react-router-dom'
import clsx from 'clsx'

import { black, white, dimmedWhite } from 'constants/styles/colors'
import { monoFont } from 'constants/styles/fonts'
import { SM_MIN_STRING, MD_MIN_STRING } from 'constants/styles/breakpoints'
import { HOME_PATH, PORTFOLIO_PATH } from 'constants/routes'

import AnimationContext from 'logic/contexts/animation'
import { useShadowStyles } from 'logic/util/styles/shadow'

import Body from 'components/typography/Body'
import IconLink from 'components/IconLink'
import Email from 'components/icons/Email'


const useStyles = createUseStyles({
	navTopRow: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 16,
	},
	nameWrapper: {
		fontStyle: 'italic',
	},
	navIcons: {
		display: 'flex',
		alignItems: 'center',
	},
	navWrapper: {
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
		fontFamily: monoFont,
		color: dimmedWhite,
		fontSize: 32,
		textDecoration: 'none',
		[SM_MIN_STRING]: {
			marginRight: 16,
		},
	},
	navActive: {
		textDecoration: [['underline'], '!important'],
		color: white,
	},
	disabledLink: {
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
	const shadowClasses = useShadowStyles()
	return (
		<>
			<div className={classes.navTopRow}>
				<Body decorative className={clsx(classes.nameWrapper, shadowClasses.textShadow)}>
					Troy Chryssos
				</Body>
				<div className={classes.navIcons}>
					<IconLink to="mailto:troychryssos@gmail.com">
						{(iconClass, iconColorClass) => (
							<Email className={iconClass} colorClassName={iconColorClass} />
						)}
					</IconLink>
				</div>
			</div>
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
