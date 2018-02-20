import { combineReducers } from 'redux';
import UserReducer from './reducer';
import flag from './flag';

const allReducers = combineReducers({
    users: UserReducer,
    flag:flag
});

export default allReducers