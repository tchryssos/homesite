import React from 'react'
import { createUseStyles } from 'react-jss'

import Body from 'components/Body'
import PageWrapper from 'components/PageWrapper'

const useStyles = createUseStyles({
	wrapperMargin: {
		padding: [[0, 16]],
	},
})

const Home = () => {
	const classes = useStyles()
	return (
		<PageWrapper className={classes.wrapperMargin}>
			<Body>Hey hey hey.</Body>
			<br />
			<Body>
				I&apos;m a Front End developer (and award-winning songwriter) with years of experience in the React ecosystem. I&apos;ve worked with everyone from the biggest corporate conglomos to the smallest independent fishmongers in New York building apps for media sharing, streaming, and creation.
			</Body>
			<br />
			<Body>Let&apos;s build something exciting!</Body>
		</PageWrapper>
	)
}

export default Home
