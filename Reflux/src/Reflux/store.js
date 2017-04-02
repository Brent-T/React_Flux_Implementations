import Reflux from 'reflux';
import ShoppingCartActions from './action';

class ShoppingCartStore extends Reflux.Store
{
	constructor()
	{
		super();
		this.listenables = ShoppingCartActions;

		this.state = { 
			currentItemId: 1,
			items: [],
		};		
	}

	onAddItem(item) {
		var { currentItemId } = this.state;
		item.id = currentItemId;
		const items = [...this.state.items, item];
		this.setState({ currentItemId: currentItemId+1, items });
	}

	onRemoveItem(itemId) {
		const items = this.state.items.filter(item => item.id !== itemId);
		this.setState({ items });
	}

	onIncrementItem(itemId) {
		const items = this.state.items.map(item => {
			if(item.id === itemId) item.count++;
			return item;
		});
		this.setState({ items });
	}

	onDecrementItem(itemId) {
		const items = this.state.items.map(item => {
			if(item.id === itemId) {
				item.count === 0 ? 0 : item.count--;
			}
			return item;
		});
		this.setState({ items });
	}

	onClearCart() {
		this.setState({ items: [] });
	}
}

export default ShoppingCartStore;