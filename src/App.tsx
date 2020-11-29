import React, { FunctionComponent } from 'react';
import { StylesProvider } from '@material-ui/core';
import { Provider } from 'react-redux';

import { configureStore } from './app/redux/configureStore';
import BaseLayout from './app/layout/BaseLayout';
import { PersistGate } from 'redux-persist/integration/react';

const App: FunctionComponent = () => {
	const { persistor, store } = configureStore();

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<StylesProvider injectFirst>
					<BaseLayout />
				</StylesProvider>
			</PersistGate>
		</Provider>
	);
};

export default App;
