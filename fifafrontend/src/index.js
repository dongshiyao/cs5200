import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
// import AppContainer from './containers/app_container';
import registerServiceWorker from './registerServiceWorker';
import MainPageContainer from './containers/main_page_container';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import searchingGroupReducer from './redux/searching_group_reducer';
import squadReducer from './redux/squad_reducer';
import userReducer from './redux/user_reducer';

const allReducers = combineReducers({
	searchingGroupReducer: searchingGroupReducer,
	squadReducer: squadReducer,
	userReducer: userReducer
});

let store = createStore(allReducers);

store.subscribe(() => {
	console.log("store changed", store.getState())
});

const app = document.getElementById('root');


ReactDOM.render(
	<Provider store={store}>
		<MainPageContainer store={store} />
	</Provider>, app);
registerServiceWorker();
