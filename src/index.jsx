import React from 'react';
import ReactDOM from 'react-dom';
import  './styles/stylesheet.css';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux';
import postReducer from './redux/reducer';
import { Provider } from 'react-redux';
import App from './components/App';

const store = createStore(postReducer);

ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('app'));
