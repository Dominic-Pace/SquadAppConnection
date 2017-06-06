import { combineReducers} from 'redux'
import AuthReducer from './core/auth/reducer'

export default combineReducers({
  auth: AuthReducer,
});
