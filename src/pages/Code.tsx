import React from 'react'
import { createUseStyles } from 'react-jss'
import { LAPTOP } from 'constants/sprites'
import PixelContent from 'components/PixelContent'
import DisplayBlock from 'components/DisplayBlock'

const useStyles = createUseStyles({
	pageWrapper: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	codeBlockWrapper: {
		zIndex: 2,
		padding: [[0, 16]],
		display: 'flex',
	},
})

const Code = () => {
	const classes = useStyles()
	return (
		<div className={classes.pageWrapper}>
			<PixelContent objectSprite={LAPTOP} />
			<div className={classes.codeBlockWrapper}>
				<DisplayBlock
					title="Banjo MTG"
					text="Banjo kazooie reads you mtg card text"
				/>
				<DisplayBlock
					title="caseybradford.club"
					text="Portfolio website for graphic &amp; UX designer Casey Bradford"
				/>
			</div>
		</div>
	)
}

export default Code
