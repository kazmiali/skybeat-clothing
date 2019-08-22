import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { fetchCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import { GlobalStyle } from './global.styles';

const App = ({ fetchCurrentUser, currentUser }) => {
	useEffect(() => {
		fetchCurrentUser();
	}, [fetchCurrentUser]);

	return (
		<div>
			<GlobalStyle />
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route exact path='/checkout' component={CheckoutPage} />
				<Route
					exact
					path='/signin'
					render={() =>
						this.props.currentUser ? (
							<Redirect to='/' />
						) : (
							<SignInAndSignUpPage />
						)
					}
				/>
			</Switch>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	fetchCurrentUser: () => dispatch(fetchCurrentUser())
});

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
