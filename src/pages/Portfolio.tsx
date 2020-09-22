import React from 'react'
import { createUseStyles } from 'react-jss'
import DisplayBlock from 'components/DisplayBlock'
import PageWrapper from 'components/PageWrapper'
import { SM_MIN_STRING, LG_MIN_STRING } from 'constants/styles/breakpoints'

const useStyles = createUseStyles({
	codeBlockWrapper: {
		padding: [[0, 16]],
		display: 'grid',
		gridGap: 16,
		gridTemplateColumns: '1fr',
		[SM_MIN_STRING]: {
			gridTemplateColumns: '1fr 1fr',
		},
		[LG_MIN_STRING]: {
			gridTemplateColumns: '1fr 1fr 1fr',
		},
	},
})

const Portfolio = () => {
	const classes = useStyles()
	return (
		<PageWrapper>
			<div className={classes.codeBlockWrapper}>
				<DisplayBlock
					title="Banjo MTG"
					text="Enter the name of a Magic the Gathering card and have Banjo from Banjo Kazooie read you the rules text"
					to="https://tchryssos.github.io/banjo-mtg/"
				/>
				<DisplayBlock
					title="caseybradford.club"
					text="Portfolio website for graphic &amp; UX designer Casey Bradford"
					to="https://caseybradford.club/"
				/>
			</div>
		</PageWrapper>
	)
}

export default Portfolio
