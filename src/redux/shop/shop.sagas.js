import { takeLatest, call, put } from 'redux-saga/effects';
// sagas don't use dispatch to dispatch actions but use put

import {
	firestore,
	convertCollectionSnapshotToMap
} from '../../firebase/firebase.utils';

import {
	fetchCollectionsSuccess,
	fetchCollectionsFailure
} from '../../redux/shop/shop.actions.js';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsStartAsync() {
	try {
		const collectionRef = firestore.collection('collections');
		const snapShot = yield collectionRef.get();
		const collectionsMap = yield call(convertCollectionSnapshotToMap, snapShot);
		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionsFailure());
	}
}

export function* fetchCollectionsStart() {
	yield takeLatest(
		ShopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsStartAsync
	);
}
