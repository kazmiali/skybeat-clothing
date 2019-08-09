import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

export const selectHidden = createSelector(
	[selectCart],
	cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems =>
		cartItems.reduce((accumulator, cartItem) => {
			return accumulator + cartItem.quantity;
		}, 0)
);

export const selectCartTotal = createSelector(
	[selectCartItems],
	cartItems =>
		cartItems.reduce((accumulator, cartItem) => {
			return accumulator + cartItem.quantity * cartItem.price;
		}, 0)
);
