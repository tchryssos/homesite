import React from 'react'
import { render } from 'react-dom'
import {
	BrowserRouter, Route, Switch, withRouter,
} from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import Home from 'pages/Home'
import Code from 'pages/Code'
import FourOhFour from 'pages/FourOhFour'
import NavBar from 'components/NavBar'

import { purple } from 'constants/styles/colors'

const useStyles = createUseStyles(() => {
	const marPadZero = {
		margin: 0,
		padding: 0,
	}
	const baseStyle = {
		height: '100%',
		width: '100%',
		backgroundColor: purple,
		...marPadZero,
	}

	return {
		'@import': [
			"url('https://fonts.googleapis.com/css?family=VT323')",
		],
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
	}
})

const App = ({ location }) => {
	// Create global effects or state here
	// with access to router location
	useStyles()
	return (
		<>
			<NavBar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/code" component={Code} />
				<Route component={FourOhFour} />
			</Switch>
		</>
	)
}

const RouterApp = withRouter((props) => <App {...props} />)

render(
	<BrowserRouter>
		<RouterApp />
	</BrowserRouter>,
	document.getElementById('app'),
)
