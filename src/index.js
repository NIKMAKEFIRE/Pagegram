import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer'
import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { spamFilter } from './redux/middleware'

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
    spamFilter
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);
