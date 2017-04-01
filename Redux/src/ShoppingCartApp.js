import React, { Component } from 'react';
import actions from './Redux/action';

class ShoppingCartApp extends Component {
	constructor(props) {
		super(props);
		this.handleAddItem = this.handleAddItem.bind(this);
		this.handleRemoveItem = this.handleRemoveItem.bind(this);
		this.handleIncrementItem = this.handleIncrementItem.bind(this);
		this.handleDecrementItem = this.handleDecrementItem.bind(this);
		this.handleClearCart = this.handleClearCart.bind(this);
	}

	componentDidMount() {
		const { store } = this.props;
		this.unsubscribe = store.subscribe(() => {
			this.forceUpdate();
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	handleAddItem() {
		const { store } = this.props;
		const input = this.refs.item_input;
		store.dispatch({
			type: actions.ADD_ITEM,
			payload: { name: input.value, count: 1 }
		});
		input.value = '';
	}

	handleRemoveItem(itemId) {
		const { store } = this.props;
		store.dispatch({
			type: actions.REMOVE_ITEM,
			payload: { id: itemId }
		});
	}

	handleIncrementItem(itemId) {
		const { store } = this.props;
		store.dispatch({
			type: actions.INCREMENT_ITEM,
			payload: { id: itemId }
		});
	}

	handleDecrementItem(itemId) {
		const { store } = this.props;
		store.dispatch({
			type: actions.DECREMENT_ITEM,
			payload: { id: itemId }
		});
	}

	handleClearCart() {
		const { store } = this.props;
		store.dispatch({
			type: actions.CLEAR_CART
		});
	}

	render() {
		const { store } = this.props;
		const state = store.getState();

		return (
			<div className="ShoppingCartApp">
				<h1>ShoppingCartApp</h1>

				<input type="text" ref="item_input" />
				<button onClick={this.handleAddItem}>Add item</button>

				<ul>
					{
						state.map(item => 
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