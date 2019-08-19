import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { updateCollections } from '../../redux/shop/shop.actions.js';

import {
	firestore,
	convertCollectionSnapshotToMap
} from '../../firebase/firebase.utils.js';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
	state = {
		loading: true
	};

	unsubscribeFromSnapShot = null;

	componentDidMount() {
		const collectionRef = firestore.collection('collections');

		this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapShot => {
			const collectionsMap = convertCollectionSnapshotToMap(snapShot);
			this.props.updateCollections(collectionsMap);
			this.setState({ loading: false });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromSnapShot();
	}

	render() {
		const { match } = this.props;
		const { loading } = this.state;
		return (
			<div className='shop-page'>
				<Route
					exact
					path={`${match.path}`}
					render={props => (
						<CollectionsOverviewWithSpinner isLoading={loading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={props => (
						<CollectionPageWithSpinner isLoading={loading} {...props} />
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap =>
		dispatch(updateCollections(collectionsMap))
});

export default connect(
	null,
	mapDispatchToProps
)(ShopPage);
