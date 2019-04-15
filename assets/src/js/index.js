import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import catReducer from './reducers';
import CatForm from './components/CatForm';
import CatList from './components/CatList';
import style from '../styles/style.less'
import { createStore } from 'redux';

const store = createStore(catReducer);
const indexRoot = document.getElementById("root");

if (indexRoot) {
	ReactDOM.render (
		<Provider store = {store}>
			<div className = {style.main}>
				<CatForm />
				<CatList />
            </div>
		</Provider>,
		indexRoot
	)
}