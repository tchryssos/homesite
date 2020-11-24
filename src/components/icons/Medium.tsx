import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

import Icon from 'components/icons/Icon'

import { white } from 'constants/styles/colors'

interface Props {
	className?: string,
	colorClassName?: string,
	title: string,
	titleId: string,
}

const useStyles = createUseStyles({
	path: {
		fill: white,
	},
})

const Medium: React.FC<Props> = ({
	className, colorClassName, title, titleId,
}) => {
	const classes = useStyles()
	return (
		<Icon
			className={className}
			title={title}
			titleId={titleId}
			viewBox="0 0 1633.77 1150.51"
		>
			<path
				className={clsx(classes.path, colorClassName)}
				d="m883.45 576.26c0 163.67-131.78 296.35-294.33 296.35s-294.34-132.68-294.34-296.35 131.78-296.36 294.34-296.36 294.33 132.69 294.33 296.36"
			/>
			<path
				className={clsx(classes.path, colorClassName)}
				d="m1206.34 576.26c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279"
			/>
			<path
				className={clsx(classes.path, colorClassName)}
				d="m1338.41 576.26c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"
			/>
			<path
				d="m1633.77 0h-296.29v.25h-1041.19v-.25h-296.29v1150.07h119.51v.44h1410.41v-.44h103.85zm-296.29 296.54v557.67h-1041.19v-557.67z"
				fill="none"
			/>
		</Icon>
	)
}

export default Medium
