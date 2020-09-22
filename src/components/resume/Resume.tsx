import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import Body from 'components/typography/Body'
import LittleTitle from 'components/typography/LittleTitle'
import SubText from 'components/typography/SubText'
import ResumeExperience from 'components/resume/ResumeExperience'

import resumePdf from 'static/chryssos_resume.pdf'

import { white, dimmed } from 'constants/styles/colors'
import { useShadowStyles } from 'logic/util/styles/shadow'
import { experience, skills } from 'constants/resume'

const useStyles = createUseStyles({
	download: {
		color: white,
		border: [[2, 'solid', white]],
		borderRadius: 4,
		textDecoration: 'none',
		padding: 8,
		width: 'fit-content',
		marginBottom: 24,
		backgroundColor: dimmed,
		display: 'flex',
	},
	downloadText: {
		color: 'inherit',
	},
	resumeContainer: {
		border: [[2, 'solid', white]],
		borderRadius: 4,
		padding: 8,
		marginBottom: 16,
		backgroundColor: dimmed,
		display: 'flex',
	},
	main: {
		width: '80%',
	},
	sidebar: {
		width: '20%',
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'right',
	},
	skillsLabel: {
		marginBottom: 8,
	},
})

const Resume = () => {
	const classes = useStyles()
	const shadowClasses = useShadowStyles()
	return (
		<>
			<a
				href={resumePdf}
				download
				className={clsx(
					classes.download,
					shadowClasses.shadow,
					shadowClasses.hoverShadow,
				)}
			>
				<Body className={classes.downloadText}>Download Full Resume</Body>
			</a>

			<div
				className={clsx(
					classes.resumeContainer,
					shadowClasses.shadow,
				)}
			>

				<div className={classes.main}>
					{experience.map(
						({
							company, title, dates, highlights,
						}) => (
							<ResumeExperience
								company={company}
								title={title}
								dates={dates}
								highlights={highlights}
							/>
						),
					)}
				</div>

				<div className={classes.sidebar}>
					<LittleTitle className={classes.skillsLabel}>Skills</LittleTitle>
					{skills.map(
						(s) => <SubText>{s}</SubText>,
					)}
				</div>
			</div>
		</>
	)
}

export default Resume
