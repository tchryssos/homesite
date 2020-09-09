import React from 'react'
import { createUseStyles } from 'react-jss'
import DisplayBlock from 'components/DisplayBlock'
import { SM_MIN_STRING, LG_MIN_STRING } from 'constants/styles/breakpoints'

const useStyles = createUseStyles({
	pageWrapper: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
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

const Code = () => {
	const classes = useStyles()
	return (
		<div className={classes.pageWrapper}>
			<div className={classes.codeBlockWrapper}>
				<DisplayBlock
					title="Banjo MTG"
					text="Banjo kazooie reads you mtg card text"
					to="https://tchryssos.github.io/banjo-mtg/"
				/>
				<DisplayBlock
					title="caseybradford.club"
					text="Portfolio website for graphic &amp; UX designer Casey Bradford"
					to="https://caseybradford.club/"
				/>
			</div>
		</div>
	)
}

export default Code
