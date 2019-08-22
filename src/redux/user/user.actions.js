import { UserActionTypes } from './user.types';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

export const setCurrentUser = user => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user
});

export const fetchCurrentUser = () => {
	return dispatch => {
		const unsubscribe = () =>
			auth.onAuthStateChanged(async userAuth => {
				if (userAuth) {
					const userRef = await createUserProfileDocument(userAuth);

					userRef.onSnapshot(snapShot => {
						dispatch(
							setCurrentUser({
								id: snapShot.id,
								...snapShot.data()
							})
						);
					});
				}
				dispatch(setCurrentUser(userAuth));
			});
		unsubscribe();
	};
};
