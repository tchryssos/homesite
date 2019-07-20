import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from 'pages/Home'

render(
	<BrowserRouter>
		<>
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
			{/* NavBar?? */}
		</>
	</BrowserRouter>,
	document.getElementById('app'),
)
