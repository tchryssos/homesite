import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from 'pages/Home'
import NavBar from 'components/NavBar'

render(
	<BrowserRouter>
		<>
			<NavBar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/code" component={Home} />
				<Route path="/audio" component={Home} />
				<Route component={FourOhFour} />
			</Switch>
		</>
	</BrowserRouter>,
	document.getElementById('app'),
)
