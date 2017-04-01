import actions from './action';

const currentItemId = 1;
const initialShoppingCartState = [];
const shoppingcart = (state = initialShoppingCartState, action = {}) => {
	switch(action.type) {
		case actions.ADD_ITEM: {
			// Add id to item
			action.payload.id = currentItemId++;
			return [
				...state,
				action.payload
			];
		}
		case actions.REMOVE_ITEM: {
			const { id } = action.payload;
			return state.filter(item => item.id !== id);
		}
		case actions.INCREMENT_ITEM: {
			const { id } = action.payload;
			return state.map(item => {
				if(item.id === id) item.count++;
				return item;
			});
		}
		case actions.DECREMENT_ITEM: {
			const { id } = action.payload;
			return state.map(item => {
				if(item.id === id) {
					item.count === 0 ? 0 : item.count--;
				}
				return item;
			});
		}
		case actions.CLEAR_CART: {
			return initialShoppingCartState;
		}
		default: 
			return state;
	}
}

export default shoppingcart;