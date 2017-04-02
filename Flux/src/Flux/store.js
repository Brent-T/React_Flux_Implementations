import { ReduceStore } from 'flux/utils';
import ShoppingCartDispatcher from './dispatcher';
import ShoppingCartActions from './action';

class ShoppingCartStore extends ReduceStore {
	constructor() {
		super(ShoppingCartDispatcher);
		this.currentItemId = 1;
	}

	getInitialState() {
		return [];
	}

	reduce(state, action) {
		switch(action.type) {
			case ShoppingCartActions.ADD_ITEM: {
				// Add id to item
				action.payload.id = this.currentItemId++;
				return [
					...state,
					action.payload
				];
			}
			case ShoppingCartActions.REMOVE_ITEM: {
				const { id } = action.payload;
				return state.filter(item => item.id !== id);
			}
			case ShoppingCartActions.INCREMENT_ITEM: {
				const { id } = action.payload;
				return state.map(item => {
					if(item.id === id) item.count++;
					return item;
				});
			}
			case ShoppingCartActions.DECREMENT_ITEM: {
				const { id } = action.payload;
				return state.map(item => {
					if(item.id === id) {
						item.count === 0 ? 0 : item.count--;
					}
					return item;
				});
			}
			case ShoppingCartActions.CLEAR_CART: {
				return [];
			}
			default: 
				return state;
		}
	}
}

export default new ShoppingCartStore();