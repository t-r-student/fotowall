import React from 'react';
import ReactDOM from 'react-dom';
import  '../src/styles/stylesheet.css';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducer';
import { Provider } from 'react-redux';
import App from './components/App';
import thunk from 'redux-thunk';
import {database} from './database/config';
import { composeWithDevTools } from 'redux-devtools-extension';

debugger;

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('app'));
