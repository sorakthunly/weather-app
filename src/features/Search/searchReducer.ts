import { createReducer, nanoid } from '@reduxjs/toolkit';
import { CityWeather, CityWeatherWithUuid } from '../../app/types/city-weather';
import { clearCityWeather, searchCityWeather, searchCityWeatherByCoordinates } from './searchActions';

type SearchState = {
	currentCityWeather?: CityWeather;
	errorMessage: string;
	isSearching: boolean;
	cityWeathers: CityWeatherWithUuid[];
};

const initialState: SearchState = {
	errorMessage: '',
	isSearching: false,
	cityWeathers: []
};

export const searchReducer = createReducer(initialState, {
	[clearCityWeather.type]: (state, { payload }: ReturnType<typeof clearCityWeather>) => {
		state.cityWeathers = state.cityWeathers.filter(({ uuid }) => uuid !== payload);
	},
	[searchCityWeather.pending.type]: state => {
		state.isSearching = true;
		state.errorMessage = '';
	},
	[searchCityWeather.fulfilled.type]: (state, { payload }: ReturnType<typeof searchCityWeather.fulfilled>) => {
		state.isSearching = false;
		state.cityWeathers.unshift({ ...payload, uuid: nanoid() });
	},
	[searchCityWeather.rejected.type]: (state, { payload }) => {
		state.errorMessage = payload;
		state.isSearching = false;
	},
	[searchCityWeatherByCoordinates.fulfilled.type]: (
		state,
		{ payload }: ReturnType<typeof searchCityWeatherByCoordinates.fulfilled>
	) => {
		state.currentCityWeather = payload;
		state.isSearching = false;
	}
});
