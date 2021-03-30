import { combineReducers } from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";

const presistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReduser =  combineReducers({
  user: userReducer,
  cart: cartReducer
} )

export default persistReducer(presistConfig, rootReduser)

