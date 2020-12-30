import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  userAccountTypeReducer,
  userRegisterReducer,
  userLoginReducer,
} from './reducers/userReducers';

const reducer = combineReducers({
  userAccountType: userAccountTypeReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
});

// const cartItemsFromStorage = localStorage.getItem('cartItems');
// const cartItems = cartItemsFromStorage ? JSON.parse(cartItemsFromStorage) : [];

// const userInfoFromStorage = localStorage.getItem('userInfo');
// const userInfo = userInfoFromStorage ? JSON.parse(userInfoFromStorage) : null;

// const shippingAddressFromStorage = localStorage.getItem('shippingAddress');
// const shippingAddress = shippingAddressFromStorage
//   ? JSON.parse(shippingAddressFromStorage)
//   : {};

const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
