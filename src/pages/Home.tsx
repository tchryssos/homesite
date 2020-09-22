import React from 'react'
import { createUseStyles } from 'react-jss'

import Body from 'components/typography/Body'
import PageWrapper from 'components/PageWrapper'
import Resume from 'components/resume/Resume'

const useStyles = createUseStyles({
	wrapperMargin: {
		padding: [[0, 16]],
	},
	bottomMar: {
		marginBottom: 16,
	},
})

const Home = () => {
	const classes = useStyles()
	return (
		<PageWrapper className={classes.wrapperMargin}>
			<Body className={classes.bottomMar}>Hey hey hey, I&apos;m Troy.</Body>
			<Body className={classes.bottomMar}>
				I&apos;m a front-end software engineer (and award-winning songwriter) with years of experience in the React ecosystem. I&apos;ve worked with everyone from the biggest corporate conglomos to the smallest independent fishmongers in New York building apps for media sharing, streaming, and creation.
			</Body>
			<Resume />
		</PageWrapper>
	)
}

export default Home
