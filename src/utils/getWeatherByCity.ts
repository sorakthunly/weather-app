import { stringify } from 'query-string';
import { environment } from '../app/configs/environment';
import { CityWeather } from '../app/types/city-weather';
import { handleGET } from './http';

export const getWeatherByCity = async (city: string): Promise<CityWeather> => {
	const queryString = stringify({ appid: environment.REACT_APP_OPEN_WEATHER_MAP_API_KEY, q: city, units: 'metric' });
	const fullUrl = `${environment.REACT_APP_OPEN_WEATHER_MAP_BASE_URL}/weather?${queryString}`;

	return handleGET(fullUrl);
};

export const getWeatherByCoordinates = async (latitute: number, longitude: number): Promise<CityWeather> => {
	const queryString = stringify({
		appid: environment.REACT_APP_OPEN_WEATHER_MAP_API_KEY,
		lat: latitute,
		lon: longitude,
		units: 'metric'
	});
	const fullUrl = `${environment.REACT_APP_OPEN_WEATHER_MAP_BASE_URL}/weather?${queryString}`;

	return handleGET(fullUrl);
};
