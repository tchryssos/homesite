import { white } from 'constants/styles/colors'

type fontType = {
	fontFamily: string,
	color: string,
	fontSize: string,
}

const baseFont: {
	fontFamily: string,
	color: string,
} = {
	fontFamily: "'VT323', monospace",
	color: white,
}

export const xsFont: fontType = {
	fontSize: '16px',
	...baseFont,
}

export const smFont: fontType = {
	fontSize: '24px',
	...baseFont,
}

export const mdFont: fontType = {
	fontSize: '36px',
	...baseFont,
}

export const lgFont: fontType = {
	fontSize: '48px',
	...baseFont,
}

export const xlFont: fontType = {
	fontSize: '72px',
	...baseFont,
}
