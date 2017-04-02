import React, { Component } from 'react';

class ShoppingCartApp extends Component {
	constructor(props) {
		super(props);
	}

	handleAddItem() {

	}		

	handleRemoveItem(itemId) {
		
	}

	handleIncrementItem(itemId) {
		
	}

	handleDecrementItem(itemId) {
		
	}

	handleClearCart() {
		
	}

	render() {
		const items = [];

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