import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import UserReducer from "./reducers/userReducer";
import AddressReducer from "./reducers/addressReducer";
import { combineReducers } from "redux";

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({ 
  UserReducer,
  AddressReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
});
let persistor = persistStore(store)
export {
  store, persistor
}
