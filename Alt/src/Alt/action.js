import alt from './alt';

class ShoppingCartActions {
	addItem(name, count) {
		return { name, count };
	}
	removeItem(itemId) {
		return { itemId };
	}
	incrementItem(itemId) {
		return { itemId };
	}
	decrementItem(itemId) {
		return { itemId };
	}
	clearCart() {
		return { };
	}
}

export default alt.createActions(ShoppingCartActions);