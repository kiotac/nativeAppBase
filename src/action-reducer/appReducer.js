import {combineReducers} from 'redux';
import loginReducers from './login/loginReducers';
const rootReducer = combineReducers({
  login: loginReducers,
});

export default rootReducer;
