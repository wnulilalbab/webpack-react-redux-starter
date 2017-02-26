import {render} from "react-dom";
import React from "react";
import {Provider} from "react-redux";
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

//import App from './containers/App';
import store from './store/store';
import Root from "./containers/Root";

// const myLogger = (store) => (next) => (action) => {
//     console.log("Logged Action: ", action);
//     next(action);
// }
//
// store.subscribe(() => {
//     console.log("Store Updated", store.getState());
// })

// render(
//     <Provider store={store}>
//         <App/>
//     </Provider>,
//     document.getElementById('app')
// );

const history = syncHistoryWithStore(hashHistory, store);

render(
    <Root store={store} history={history} />,
    document.getElementById('app')
)
