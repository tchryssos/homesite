import React, { useEffect, useState, useRef } from 'react'
import { render } from 'react-dom'
import {
	BrowserRouter, Route, Switch, withRouter,
} from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import debounce from 'lodash.debounce'

import AnimationContext from 'logic/contexts/animation'
import WindowContext from 'logic/contexts/window'

import Home from 'pages/Home'
import Code from 'pages/Code'
import FourOhFour from 'pages/FourOhFour'

import NavBar from 'components/NavBar'
import PixelContent from 'components/PixelContent'

import { marPadZero, baseStyle } from 'constants/styles/base'
import { PAGE_TRANSITION_TIME } from 'constants/animation'

const useStyles = createUseStyles({
	'@import': "url('https://fonts.googleapis.com/css?family=VT323')",
	'@global': {
		html: baseStyle,
		body: {
			...baseStyle,
			position: 'relative',
		},
		'#app': baseStyle,
		div: {
			boxSizing: 'border-box',
		},
		p: marPadZero,
		h1: marPadZero,
		h2: marPadZero,
		h3: marPadZero,
	},
})

interface AppProps {
	location: {
		pathname: string,
	},
}

const App: React.FC<AppProps> = ({ location: { pathname } }) => {
	useStyles()
	const initializedRef = useRef(false)
	const [isAnimating, setIsAnimating] = useState(false)
	const [windowSize, setWindowSize] = useState(window.innerWidth)
	const dSetWindowSize = debounce(() => {
		setWindowSize(window.innerWidth)
	}, 500)

	useEffect(() => {
		if (initializedRef.current) {
			setIsAnimating(true)
			setTimeout(() => setIsAnimating(false), PAGE_TRANSITION_TIME)
		} else {
			initializedRef.current = true
		}
	}, [pathname])

	useEffect(() => {
		window.addEventListener('resize', dSetWindowSize)
	}, [])

	return (
		<AnimationContext.Provider value={{ isAnimating }}>
			<WindowContext.Provider value={{ windowSize }}>
				<NavBar />
				<PixelContent />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/code" component={Code} />
					<Route component={FourOhFour} />
				</Switch>
			</WindowContext.Provider>
		</AnimationContext.Provider>
	)
}

const RouterApp = withRouter(({ location }) => <App location={location} />)

render(
	<BrowserRouter>
		<RouterApp />
	</BrowserRouter>,
	document.getElementById('app'),
)
