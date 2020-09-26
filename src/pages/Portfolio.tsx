import React from 'react'
import { createUseStyles } from 'react-jss'
import DisplayBlock from 'components/ProjectBlock'
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
			<DisplayBlock
				title="caseybradford&#x0200B;.club"
				text="Portfolio website for graphic &amp; UX designer Casey Bradford"
				to="https://caseybradford.club/"
				toRepo="https://github.com/tchryssos/casey-site"
				imageSrc={SparkleIcon}
			/>
		</PortfolioSection>
		<PortfolioSection title="Experiments">
			<DisplayBlock
				title="Banjo MtG"
				text="Enter the name of a Magic the Gathering card and have Banjo &amp; Co. from Banjo Kazooie read you the card text"
				to="https://tchryssos.github.io/banjo-mtg/"
				toRepo="https://github.com/tchryssos/banjo-mtg"
				imageSrc={BanjoIcon}
			/>
			<DisplayBlock
				title="Home Run!"
				text="Step up to the plate as a procedurally generated baseball player  and swing for the fences"
				to="https://tchryssos.github.io/homerun/"
				toRepo="https://github.com/tchryssos/homerun"
				imageSrc={BaseballIcon}
			/>
		</PortfolioSection>
	</PageWrapper>
)

export default Portfolio
