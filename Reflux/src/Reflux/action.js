import Reflux from 'reflux';

const ShoppingCartActions = Reflux.createActions([
	'addItem',
	'removeItem',
	'incrementItem',
	'decrementItem',
	'clearCart',
]);

export default ShoppingCartActions;