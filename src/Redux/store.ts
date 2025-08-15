import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import productosReducer from './Productos/productosSlice';
import cartReducer from './Cart/cartSlice';
import filtersReducer from './Filters/filtersSlice';
import UserReducer from './User/userSlice';
import toggleMenuReducer from './ToggleMenu/toggleMenuSlice';
import orderReducer from './Orders/ordersSlice';





const reducers = combineReducers({
  productos: productosReducer,
  cart: cartReducer,
  filters: filtersReducer,
  user: UserReducer,
  toggleMenu: toggleMenuReducer,
  orders: orderReducer,
});


const persistConfig: PersistConfig<ReturnType<typeof reducers>> = {
  key: 'root',
  storage,
  whitelist: ['cart', 'user'],
};





const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});


export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
