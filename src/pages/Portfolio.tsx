import React from 'react'
import { createUseStyles } from 'react-jss'
import DisplayBlock from 'components/DisplayBlock'
import PageWrapper from 'components/PageWrapper'
import Title from 'components/typography/Title'
import { SM_MIN_STRING, LG_MIN_STRING } from 'constants/styles/breakpoints'

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
			<DisplayBlock
				title="caseybradford.club"
				text="Portfolio website for graphic &amp; UX designer Casey Bradford"
				to="https://caseybradford.club/"
			/>
		</PortfolioSection>
		<PortfolioSection title="Experiments">
			<DisplayBlock
				title="Banjo MTG"
				text="Enter the name of a Magic the Gathering card and have Banjo from Banjo Kazooie read you the rules text"
				to="https://tchryssos.github.io/banjo-mtg/"
			/>
		</PortfolioSection>
	</PageWrapper>
)

export default Portfolio
