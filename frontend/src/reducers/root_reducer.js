import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import tweets from './tweets_reducer';
import session_errors from './session_errors_reducer'

const RootReducer = combineReducers({
  session,
  errors,
  tweets,
  session_errors
});

export default RootReducer;