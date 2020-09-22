import { createUseStyles } from 'react-jss'
import { darkPurple } from 'constants/styles/colors'

export const useShadowStyle = createUseStyles({
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
})
