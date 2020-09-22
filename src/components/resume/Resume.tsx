import React from 'react'
import { createUseStyles } from 'react-jss'

import Body from 'components/typography/Body'
import LittleTitle from 'components/typography/LittleTitle'
import SubText from 'components/typography/SubText'
import ResumeExperience from 'components/resume/ResumeExperience'

import resumePdf from 'static/chryssos_resume.pdf'

import { white, dimmedWhite } from 'constants/styles/colors'
import { experience, skills } from 'constants/resume'

const useStyles = createUseStyles({
	download: {
		color: white,
		border: [[2, 'solid', white]],
		borderRadius: 4,
		textDecoration: 'none',
		padding: 4,
		width: 'fit-content',
		marginBottom: 24,
		'&:hover': {
			borderColor: dimmedWhite,
			color: dimmedWhite,
		},
	},
	downloadText: {
		color: 'inherit',
	},
	resumeContainer: {
		border: [[2, 'solid', white]],
		borderRadius: 4,
		padding: 8,
		marginBottom: 16,
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
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
	return (
		<>
			<a href={resumePdf} download className={classes.download}>
				<Body className={classes.downloadText}>Download Resume</Body>
			</a>

			<div className={classes.resumeContainer}>

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
