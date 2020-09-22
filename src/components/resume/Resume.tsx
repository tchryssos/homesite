import React from 'react'
import { createUseStyles } from 'react-jss'

import Button from 'components/Button'
import Body from 'components/Body'

import resumePdf from 'static/chryssos_resume.pdf'

import { white } from 'constants/styles/colors'

const useStyles = createUseStyles({
	download: {
		border: [[2, 'solid', white]],
		borderRadius: 4,
		textDecoration: 'none',
		padding: 4,
		width: 'fit-content',
		marginBottom: 16,
	},
	resumeContainer: {
		border: [[2, 'solid', white]],
		borderRadius: 4,
		padding: 8,
	},
})

const Resume = () => {
	const classes = useStyles()
	return (
		<>
			<a href={resumePdf} download className={classes.download}>
				<Body>Download Resume</Body>
			</a>
			<div className={classes.resumeContainer}>
				Resume
			</div>
		</>
	)
}

export default Resume
