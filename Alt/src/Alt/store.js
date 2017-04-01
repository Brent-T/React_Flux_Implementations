import alt from './alt';
import ShoppingCartActions from './action';

class ShoppingCartStore {
	constructor() {
		this.bindListeners({
			addItem: ShoppingCartActions.addItem,
			removeItem: ShoppingCartActions.removeItem,
			incrementItem: ShoppingCartActions.incrementItem,
			decrementItem: ShoppingCartActions.decrementItem,
			clearCart: ShoppingCartActions.clearCart,
		});

		this.state = { 
			currentItemId: 1,
			items: [],
		};
	}

	addItem(item) {
		var { currentItemId } = this.state;
		item.id = currentItemId;
		const items = [...this.state.items, item];
		this.setState({ currentItemId: currentItemId+1, items });
	}

	removeItem(data) {
		const { itemId } = data;
		const items = this.state.items.filter(item => item.id !== itemId);
		this.setState({ items });
	}

	incrementItem(data) {
		const { itemId } = data;
		const items = this.state.items.map(item => {
			if(item.id === itemId) item.count++;
			return item;
		});
		this.setState({ items });
	}

	decrementItem(data) {
		const { itemId } = data;
		const items = this.state.items.map(item => {
			if(item.id === itemId) {
				item.count === 0 ? 0 : item.count--;
			}
			return item;
		});
		this.setState({ items });
	}

	clearCart() {
		this.setState({ items: [] });
	}
}

export default alt.createStore(ShoppingCartStore, 'ShoppingCartStore');