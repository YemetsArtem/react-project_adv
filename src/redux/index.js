import { createStore , applyMiddleware} from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from "./reducer"
import rootSaga  from './saga'

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(
    routerMiddleware(history), 
    sagaMiddleware, 
    thunk, 
    logger
);
const store = createStore(reducer(history), enhancer);
window.store = store;

sagaMiddleware.run(rootSaga);

export default store;

