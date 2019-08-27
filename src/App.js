import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { GlobalStyle } from './global.styles';

class App extends Component {
	componentDidMount() {
		const { checkUserSession } = this.props;
		checkUserSession();
	}

	render() {
		const { currentUser } = this.props;
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
							currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
						}
					/>
				</Switch>
			</div>
		);
	}
}

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
