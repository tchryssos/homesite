import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import Body from 'components/typography/Body'
import LittleTitle from 'components/typography/LittleTitle'
import Github from 'components/icons/Github'
import ExtLink from 'components/ExtLink'

import { black, white, dimmedWhite } from 'constants/styles/colors'
import { useShadowStyles } from 'logic/util/styles/shadow'
import orNull from 'logic/util/orNull'

interface Props {
	title: string,
	text: string,
	altText?: string,
	imageSrc?: string,
	to: string,
	toRepo?: string,
}

const useStyles = createUseStyles({
	block: {
		height: '100%',
		borderRadius: 4,
		backgroundColor: black,
		border: [[2, 'solid', white]],
		display: 'flex',
		flexDirection: 'column',
		padding: 8,
		wordBreak: 'break-word',
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 8,
		width: '100%',
	},
	headerLeft: {
		display: 'flex',
		alignItems: 'center',
	},
	image: {
		height: 40,
		width: 40,
		marginRight: 16,
	},
	githubLink: {
		height: 40,
		width: 40,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		'&:hover $githubColor': {
			fill: dimmedWhite,
		},
		'&:active $githubColor': {
			fill: dimmedWhite,
		},
	},
	github: {
		height: 28,
		width: 28,
	},
	githubColor: {}, // modified by .githubLink
})

const DisplayBlock: React.FC<Props> = ({
	title, text, altText, imageSrc, to,
	toRepo,
}) => {
	const classes = useStyles()
	const shadowClasses = useShadowStyles()
	return (
		<ExtLink to={to}>
			<div
				className={clsx(
					classes.block,
					shadowClasses.shadow,
					shadowClasses.hoverShadow,
				)}
			>
				<div className={classes.header}>
					<div className={classes.headerLeft}>
						<img
							src={imageSrc}
							alt={altText}
							className={classes.image}
						/>
						<LittleTitle>{title}</LittleTitle>
					</div>
					{orNull(
						Boolean(toRepo),
						<ExtLink to={toRepo} className={classes.githubLink}>
							<Github className={classes.github} colorClassName={classes.githubColor} />
						</ExtLink>,
					)}
				</div>
				<Body>{text}</Body>
			</div>
		</ExtLink>
	)
}

export default DisplayBlock
