import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from 'pages/Home'
import Code from 'pages/Code'
import Audio from 'pages/Audio'
import FourOhFour from 'pages/FourOhFour'
import NavBar from 'components/NavBar'

render(
	<BrowserRouter>
		<>
			<NavBar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/code" component={Code} />
				<Route path="/audio" component={Audio} />
				<Route component={FourOhFour} />
			</Switch>
		</>
	</BrowserRouter>,
	document.getElementById('app'),
)
