import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import LittleTitle from 'components/typography/LittleTitle'
import SubText from 'components/typography/SubText'
import ResumeExperience from 'components/resume/ResumeExperience'
import ExtLink from 'components/ExtLink'

import resumePdf from 'static/chryssos_resume.pdf'

import { white, dimmed } from 'constants/styles/colors'
import { SM_MIN_STRING } from 'constants/styles/breakpoints'
import { useShadowStyles } from 'logic/util/styles/shadow'
import { experience, skills } from 'constants/resume'

const useStyles = createUseStyles({
	download: {
		border: [[2, 'solid', white]],
		borderRadius: 4,
		padding: [[8, 16]],
		width: '100%',
		marginBottom: 24,
		backgroundColor: dimmed,
		textAlign: 'center',
		[SM_MIN_STRING]: {
			width: 'fit-content',
		},
	},
	downloadText: {
		color: 'inherit',
	},
	resumeContainer: {
		border: [[2, 'solid', white]],
		borderRadius: 4,
		padding: 16,
		marginBottom: 16,
		backgroundColor: dimmed,
		display: 'flex',
		flexWrap: 'wrap',
	},
	main: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		marginBottom: 16,
		[SM_MIN_STRING]: {
			width: '80%',
			marginBottom: 0,
		},
	},
	sidebar: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		[SM_MIN_STRING]: {
			width: '20%',
			textAlign: 'right',
		},
	},
	sectionLabel: {
		marginBottom: 16,
		textDecoration: 'underline',
	},
})

const Resume = () => {
	const classes = useStyles()
	const shadowClasses = useShadowStyles()
	return (
		<>
			<ExtLink
				to={resumePdf}
				download
				className={clsx(
					classes.download,
					shadowClasses.shadow,
					shadowClasses.hoverShadow,
				)}
			>
				<LittleTitle className={classes.downloadText}>Download Full Resume</LittleTitle>
			</ExtLink>

			<div className={classes.resumeContainer}>
				<div className={classes.main}>
					<LittleTitle className={classes.sectionLabel}>Experience</LittleTitle>
					{experience.map(
						({
							company, title, dates, highlights,
						}) => (
							<ResumeExperience
								company={company}
								title={title}
								dates={dates}
								highlights={highlights}
								key={`${company}-${title}`}
							/>
						),
					)}
				</div>

				<div className={classes.sidebar}>
					<LittleTitle className={classes.sectionLabel}>Skills</LittleTitle>
					{skills.map(
						(s) => <SubText key={s}>{s}</SubText>,
					)}
				</div>
			</div>
		</>
	)
}

export default Resume
