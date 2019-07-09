import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const HathiPage = () => {
	return (
		<div>
			<h1 style={{ color: 'red', fontSize: '64px', textAlign: 'center' }}>
				Hello Router working
			</h1>
		</div>
	);
};

const App = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/Hathi' component={HathiPage} />
			</Switch>
		</div>
	);
};

export default App;
