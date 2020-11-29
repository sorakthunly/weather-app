import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { CityWeather } from '../../app/types/city-weather';
import { getWeatherByCity, getWeatherByCoordinates } from '../../utils/getWeatherByCity';

export const clearCityWeather = createAction<string>('clearCityWeather');

export const searchCityWeather = createAsyncThunk<CityWeather, string>(
	'searchCityWeather',
	async (payload, thunkAPI) => {
		try {
			const result = await getWeatherByCity(payload);

			return result;
		} catch (err) {
			return thunkAPI.rejectWithValue(err.message);
		}
	}
);

type SearchCityWeatherByCoordinatesPayload = {
	latitude: number;
	longitude: number;
};

export const searchCityWeatherByCoordinates = createAsyncThunk<CityWeather, SearchCityWeatherByCoordinatesPayload>(
	'searchCityWeatherByCoordinates',
	async ({ latitude, longitude }, thunkAPI) => {
		try {
			const result = await getWeatherByCoordinates(latitude, longitude);

			return result;
		} catch (err) {
			return thunkAPI.rejectWithValue(err.message);
		}
	}
);
