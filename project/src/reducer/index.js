import { combineReducers } from 'redux';
import itemsReducer from './reducer-items';
import cart from './reducer-cart';



const allReducers = combineReducers({
    items: itemsReducer,
    cart: cart

});

export default allReducers