import { createStore , applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from "./reducer"

export const history = createBrowserHistory();

const enhancer = compose(applyMiddleware(routerMiddleware(history), thunk, logger));
const store = createStore(reducer(history), enhancer);

window.store = store;

export default store;

