import React from 'react';
import Reflux from 'reflux';
import ShoppingCartStore from './Reflux/store';
import ShoppingCartActions from './Reflux/action';

class ShoppingCartApp extends Reflux.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.store = ShoppingCartStore;
		this.handleAddItem = this.handleAddItem.bind(this);
	}

	handleAddItem() {
		const input = this.refs.item_input;
		ShoppingCartActions.addItem({ name: input.value, count: 1 });
		input.value = '';
	}		

	handleRemoveItem(itemId) {
		ShoppingCartActions.removeItem(itemId);
	}

	handleIncrementItem(itemId) {
		ShoppingCartActions.incrementItem(itemId);
	}

	handleDecrementItem(itemId) {
		ShoppingCartActions.decrementItem(itemId);
	}

	handleClearCart() {
		ShoppingCartActions.clearCart();
	}

	render() {
		const { items } = this.state;

		return (
			<div className="ShoppingCartApp">
				<h1>ShoppingCartApp - Reflux</h1>

				<input type="text" ref="item_input" />
				<button onClick={this.handleAddItem}>Add item</button>

				<ul>
					{
						items.map(item => 
							<li key={item.id}>
								{item.name} | {item.count} 
								<button onClick={() => this.handleRemoveItem(item.id)}>Remove item</button>
								<button onClick={() => this.handleIncrementItem(item.id)}>+</button>
								<button onClick={() => this.handleDecrementItem(item.id)}>-</button>
							</li>
						)
					}
				</ul>

				<button onClick={this.handleClearCart}>Clear cart</button>
			</div>
		);
	}
}

export default ShoppingCartApp;