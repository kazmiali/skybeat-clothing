import React, { useEffect, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import axios from 'axios';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import NotFound from './components/not-found/not-found.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() =>
	import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({ checkUserSession, currentUser }) => {
	useEffect(() => {
		checkUserSession();
		axios
			.get('/firebasekey')
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
		// fetch('firebasekey').then(res => console.log(res));
	}, [checkUserSession]);

	return (
		<div>
			<GlobalStyle />
			<Header />
			<Switch>
				<ErrorBoundary>
					<Suspense fallback={<Spinner></Spinner>}>
						<Switch>
							<Route exact path='/' component={HomePage} />
							<Route path='/shop' component={ShopPage} />
							<Route exact path='/checkout' component={CheckoutPage} />
							<Route
								exact
								path='/signin'
								render={() =>
									currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
								}
							/>
							<Route path='*' component={NotFound} />
						</Switch>
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
});

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
