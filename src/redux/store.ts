import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import cartReducer from './reducers/cartReducer'

const combinedReducers = combineReducers({
    cart : cartReducer
})

const persistedReducers = persistReducer({
    key : "pc-shop",
    storage,
    whitelist : []
} , combinedReducers)

const store = configureStore({
    reducer : persistedReducers,
    middleware : (getDefault)=>getDefault({
        serializableCheck : false
    })
})

export const persistore = persistStore(store)

export default store