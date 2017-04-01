import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingCartApp from './ShoppingCartApp';
import store from './Redux/store';

ReactDOM.render(
  <ShoppingCartApp store={store} />,
  document.getElementById('root')
);
