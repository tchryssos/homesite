import React from 'react'
import { createUseStyles } from 'react-jss'
import ProjectBlock from 'components/ProjectBlock'
import PageWrapper from 'components/PageWrapper'
import Title from 'components/typography/Title'
import { SM_MIN_STRING, LG_MIN_STRING } from 'constants/styles/breakpoints'

import BanjoIcon from 'static/banjo.ico'
import BaseballIcon from 'static/baseball.ico'
import SparkleIcon from 'static/sparkle.ico'

const useStyles = createUseStyles({
	codeBlockWrapper: {
		display: 'grid',
		gridGap: 16,
		marginBottom: 16,
		gridTemplateColumns: '1fr',
		[SM_MIN_STRING]: {
			gridTemplateColumns: '1fr 1fr',
		},
		[LG_MIN_STRING]: {
			gridTemplateColumns: '1fr 1fr 1fr',
		},
	},
	title: {
		marginBottom: 16,
	},
})

interface SectionProps {
	title: string,
	children: React.ReactNode,
}

const PortfolioSection: React.FC<SectionProps> = ({
	title, children,
}) => {
	const classes = useStyles()
	return (
		<>
			<Title className={classes.title}>{title}</Title>
			<div className={classes.codeBlockWrapper}>
				{children}
			</div>
		</>
	)
}

const Portfolio = () => (
	<PageWrapper>
		<PortfolioSection title="Work">
			<ProjectBlock
				title="caseybradford&#x0200B;.club"
				text="Portfolio website for graphic &amp; UX designer Casey Bradford."
				to="https://caseybradford.club/"
				toRepo="https://github.com/tchryssos/casey-site"
				imageSrc={SparkleIcon}
			/>
		</PortfolioSection>
		<PortfolioSection title="Experiments">
			<ProjectBlock
				title="Banjo MtG"
				text="Enter the name of a Magic the Gathering card and have Banjo &amp; Co. from Banjo Kazooie read you the card text."
				to="https://tchryssos.github.io/banjo-mtg/"
				toRepo="https://github.com/tchryssos/banjo-mtg"
				imageSrc={BanjoIcon}
			/>
			<ProjectBlock
				title="HOME RUN"
				text="Step up to the plate as a procedurally generated baseball player  and swing for the fences!"
				to="https://tchryssos.github.io/homerun/"
				toRepo="https://github.com/tchryssos/homerun"
				imageSrc={BaseballIcon}
			/>
		</PortfolioSection>
		<PortfolioSection title="Other">
			<ProjectBlock
				title="React Template"
				text="My template for new React projects. Includes React, TS, and Storybook."
				to="https://github.com/tchryssos/react-template"
				toRepo="https://github.com/tchryssos/react-template"
				hideLink
				imageSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
			/>
		</PortfolioSection>
	</PageWrapper>
)

export default Portfolio
