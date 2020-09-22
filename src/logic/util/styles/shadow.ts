import { createUseStyles } from 'react-jss'
import { darkPurple, black } from 'constants/styles/colors'

export const useShadowStyles = createUseStyles({
	shadow: {
		boxShadow: [[4, 4, darkPurple]],
	},
	hoverShadow: {
		'&:hover': {
			transform: 'translate(-4px, -4px)',
			boxShadow: [[8, 8, darkPurple]],
		},
		'&:active': {
			transform: 'translate(-4px, -4px)',
			boxShadow: [[8, 8, darkPurple]],
		},
	},
	textShadow: {
		textShadow: [[1, 2, black]],
	},
})
