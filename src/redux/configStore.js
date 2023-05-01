import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import UserReducer from "./reducers/userReducer";
import AddressReducer from "./reducers/addressReducer";
import CareerReducer from "./reducers/careerReducer";
import ScheduleReducer from "./reducers/scheduleReducer";
import { combineReducers } from "redux";
import ManageCarReducer from "./reducers/admin/manageCarReducer";
import ManageUserReducer from "./reducers/admin/manageUserReducer";
import ManageTicketReducer from "./reducers/admin/manageTicketReducer";

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({ 
  UserReducer,
  AddressReducer,
  CareerReducer,
  ScheduleReducer,
  //Role Admin
  ManageCarReducer,
  ManageUserReducer,
  ManageTicketReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
});
let persistor = persistStore(store)
export {
  store, persistor
}
