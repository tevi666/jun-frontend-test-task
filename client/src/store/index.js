import { configureStore } from '@reduxjs/toolkit';
import { dataSliceReducer } from './slices/dataSlice';
import { socketReducer } from './slices/socketSlice';

export const store = configureStore({
	reducer: { dataSlice: dataSliceReducer, socket: socketReducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});