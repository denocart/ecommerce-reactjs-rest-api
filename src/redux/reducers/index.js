import { combineReducers } from 'redux';
import authReducer from './authReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';

export default combineReducers({
 auth :authReducer,
 loading: loadingReducer,
 errors:errorReducer
});