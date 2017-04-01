import React, { Component } from 'react';
import ShoppingCartStore from './Alt/store';
import ShoppingCartActions from './Alt/action';

class ShoppingCartApp extends Component {
	constructor(props) {
		super(props);
		this.state = ShoppingCartStore.getState();
		this.onChange = this.onChange.bind(this);
		this.handleAddItem = this.handleAddItem.bind(this);
	}

	componentDidMount() {
		ShoppingCartStore.listen(this.onChange);
	}

	componentWillUnmount() {
		ShoppingCartStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	handleAddItem() {
		const input = this.refs.item_input;
		ShoppingCartActions.addItem(input.value, 1);
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
				<h1>ShoppingCartApp - Alt</h1>

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