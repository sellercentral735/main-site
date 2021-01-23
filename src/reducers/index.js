import categoryReducer from './category.reducer';
import { combineReducers } from "redux";
import authReducer from './auth.reducer';
import productReducer from './product.reducer';
import cartReducer from './cart.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
    category: categoryReducer,
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    user: userReducer

});

export default rootReducer;