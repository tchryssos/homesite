import React from 'react'
import { createUseStyles } from 'react-jss'
import { LAPTOP } from 'constants/sprites'
import PixelContent from 'components/PixelContent'

const useStyles = createUseStyles({
	pageWrapper: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
})

const Code = () => {
	const classes = useStyles()
	return (
		<div className={classes.pageWrapper}>
			<PixelContent objectSprite={LAPTOP} />
			<div className={classes.codeBlockWrapper}>
	
			</div>
		</div>
	)
}

export default Code
