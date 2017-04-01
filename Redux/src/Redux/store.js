import { createStore } from 'redux';
import shoppingcart from './reducer';

const store = createStore(shoppingcart);

export default store;