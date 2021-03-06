import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Search from './pages/Search';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
        <Route path="/" exact component={Login} />
        <Route path="/search" component={Search} />
			</Switch>
		</BrowserRouter>
	);
}