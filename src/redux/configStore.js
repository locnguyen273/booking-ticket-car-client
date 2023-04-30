import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import UserReducer from "./reducers/userReducer";
import AddressReducer from "./reducers/addressReducer";
import CareerReducer from "./reducers/careerReducer";
import ScheduleReducer from "./reducers/scheduleReducer";
import { combineReducers } from "redux";

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({ 
  UserReducer,
  AddressReducer,
  CareerReducer,
  ScheduleReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
});
let persistor = persistStore(store)
export {
  store, persistor
}
