import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import Body from 'components/typography/Body'
import LittleTitle from 'components/typography/LittleTitle'
import Github from 'components/icons/Github'
import Open from 'components/icons/Open'
import ExtLink from 'components/ExtLink'
import IconLink from 'components/IconLink'

import { black, white } from 'constants/styles/colors'
import { useShadowStyles } from 'logic/util/styles/shadow'
import orNull from 'logic/util/orNull'

interface Props {
	title: string,
	text: string,
	imageAltText: string,
	imageSrc: string,
	to: string,
	toRepo?: string,
	hideLink?: boolean,
}

const useStyles = createUseStyles({
	block: {
		borderRadius: 4,
		backgroundColor: black,
		border: [[2, 'solid', white]],
		display: 'flex',
		flexDirection: 'column',
		padding: 8,
		wordBreak: 'break-word',
		position: 'relative',
	},
	siteLink: {
		position: 'absolute',
		height: '100%',
		width: '100%',
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
	icons: {
		display: 'flex',
	},
})

const ProjectBlock: React.FC<Props> = ({
	title, text, imageAltText, imageSrc, to,
	toRepo, hideLink,
}) => {
	const classes = useStyles()
	const shadowClasses = useShadowStyles()
	return (
		<div
			className={clsx(
				classes.block,
				shadowClasses.shadow,
				shadowClasses.hoverShadow,
			)}
		>
			<ExtLink to={to} className={classes.siteLink} />
			<div className={classes.header}>
				<div className={classes.headerLeft}>
					<img
						src={imageSrc}
						alt={imageAltText}
						className={classes.image}
					/>
					<LittleTitle>{title}</LittleTitle>
				</div>
				<div className={classes.icons}>
					{orNull(
						!hideLink,
						<IconLink to={to}>
							{(iconClass, iconColorClass) => (
								<Open
									className={iconClass}
									colorClassName={iconColorClass}
									title={`Open ${title}`}
									titleId={`${title}OpenId`}
								/>
							)}
						</IconLink>,
					)}
					{orNull(
						Boolean(toRepo),
						<IconLink to={toRepo}>
							{(iconClass, iconColorClass) => (
								<Github
									className={iconClass}
									colorClassName={iconColorClass}
									title={`Go to the Github repo for ${title}`}
									titleId={`${title}GitRepoId`}
								/>
							)}
						</IconLink>,
					)}
				</div>
			</div>
			<Body>{text}</Body>
		</div>
	)
}

export default ProjectBlock
