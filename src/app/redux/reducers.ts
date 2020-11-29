import { combineReducers } from 'redux';

import { appReducer } from '../appReducer';
import { searchReducer } from '../../features/Search/searchReducer';

export const reducer = combineReducers({
	app: appReducer,
	search: searchReducer
});

export type State = ReturnType<typeof reducer>;
