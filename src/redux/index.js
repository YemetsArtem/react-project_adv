import { createStore, applyMiddleware } from "redux"
import reducer from "./reducer"
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {  connectRouter, routerMiddleware } from 'connected-react-router'
import history from '../history'

const enhancer = applyMiddleware(routerMiddleware(history), thunk, logger);
const store = createStore(connectRouter(history)(reducer), enhancer);

export default store;
