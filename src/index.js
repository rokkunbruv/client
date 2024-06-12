import React from 'react';
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';

import reducers from './reducers';

import App from './App';
import './index.css';

// i dont understand
const store = createStore(reducers, compose(applyMiddleware(thunk) ) );

// i dont fully understand
// i guess you create a root so that this could be displayed on the website as the root user idk
const root = createRoot( document.getElementById('root') );
root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);
