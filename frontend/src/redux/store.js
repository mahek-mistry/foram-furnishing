import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import productSlice from "./productSlice";
import wishlistReducer from "./wishlistSlice";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";


// Persist config
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};


// Combine reducers
const rootReducer = combineReducers({
  user: userSlice,
  product: productSlice,
  wishlist: wishlistReducer,
});


// Persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);


// Store
const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

export default store;