import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import { getInventoryItems } from './actions/inventoryItemsActions'
import App from './App'

const store = configureStore()

store.dispatch(getInventoryItems())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('container')
);



