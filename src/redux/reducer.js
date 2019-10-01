import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as form } from "redux-form"
import authReducer, {moduleName as authModule} from '../ducks/authorization'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  form,
  [authModule]: authReducer
});

export default createRootReducer