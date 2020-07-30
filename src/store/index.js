import {createStore} from 'redux';
import appReducer from '../action-reducer/appReducer';

const store = createStore(appReducer);

export default store;
