import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as form } from "redux-form"
import authReducer, {moduleName as authModule} from '../ducks/authorization'
import peopleReducer, {moduleName as peopleModule} from '../ducks/people'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  form,
  [authModule]: authReducer,
  [peopleModule]: peopleReducer
});

export default createRootReducer