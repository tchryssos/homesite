import React from 'react'
import { createUseStyles } from 'react-jss'

import SubText from 'components/typography/SubText'
import LittleTitle from 'components/typography/LittleTitle'

import { ExperienceProps } from 'constants/resume'

const useStyles = createUseStyles({
	experienceContainer: {
		display: 'flex',
		flexDirection: 'column',
		marginBottom: 16,
		'&:last-child': {
			marginBottom: 0,
		},
	},
	dates: {
		marginBottom: 8,
		color: 'rgba(255, 255, 255, 0.7)',
	},
})

const ResumeExperience: React.FC<ExperienceProps> = ({
	company, title, dates, highlights,
}) => {
	const classes = useStyles()
	return (
		<div className={classes.experienceContainer}>
			<LittleTitle>
				{company}
				&nbsp;-&nbsp;
				{title}
			</LittleTitle>
			<SubText className={classes.dates}>{dates}</SubText>
			{highlights.map(
				(h) => (
					<SubText>
						+&nbsp;
						{h}
					</SubText>
				),
			)}
		</div>
	)
}

export default ResumeExperience
