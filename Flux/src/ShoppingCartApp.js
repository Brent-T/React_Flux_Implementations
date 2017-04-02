import React, { Component } from 'react';
import ShoppingCartStore from './Flux/store';
import ShoppingCartDispatcher from './Flux/dispatcher';
import ShoppingCartActions from './Flux/action';

class ShoppingCartApp extends Component {
	constructor(props) {
		super(props);
		this.handleAddItem = this.handleAddItem.bind(this);
	}

	componentDidMount() {
		this.token = ShoppingCartStore.addListener(() => {
			this.forceUpdate();
		});
	}

	componentWillUnmount() {
		this.token.remove();
	}

	handleAddItem() {
		const input = this.refs.item_input;
		ShoppingCartDispatcher.dispatch({
			type: ShoppingCartActions.ADD_ITEM,
			payload: { name: input.value, count: 1 }
		});
		input.value = '';
	}

	handleRemoveItem(itemId) {
		ShoppingCartDispatcher.dispatch({
			type: ShoppingCartActions.REMOVE_ITEM,
			payload: { id: itemId }
		});
	}

	handleIncrementItem(itemId) {
		ShoppingCartDispatcher.dispatch({
			type: ShoppingCartActions.INCREMENT_ITEM,
			payload: { id: itemId }
		});
	}

	handleDecrementItem(itemId) {
		ShoppingCartDispatcher.dispatch({
			type: ShoppingCartActions.DECREMENT_ITEM,
			payload: { id: itemId }
		});
	}

	handleClearCart() {
		ShoppingCartDispatcher.dispatch({
			type: ShoppingCartActions.CLEAR_CART
		});
	}

	render() {
		const items = ShoppingCartStore.getState();

		return (
			<div className="ShoppingCartApp">
				<h1>ShoppingCartApp - Flux</h1>

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