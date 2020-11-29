import { configureStore as configureReduxStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { fetchGeolocation } from '../appActions';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { environment } from '../configs/environment';
import { reducer } from './reducers';

const persistConfig = {
	key: 'root',
	storage
};

export const configureStore = () => {
	const appIgnoredActions = [fetchGeolocation.fulfilled.type];
	const persistedReducer = persistReducer(persistConfig, reducer);

	const store = configureReduxStore({
		devTools: environment.NODE_ENV === 'development',
		middleware: getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [...appIgnoredActions]
			}
		}),
		reducer: persistedReducer
	});

	const persistor = persistStore(store);

	return { store, persistor };
};

export type Dispatch = ReturnType<typeof configureStore>['store']['dispatch'];
