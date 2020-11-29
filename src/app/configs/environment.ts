import { cleanEnv, str } from 'envalid';

export const environment = cleanEnv(process.env, {
	NODE_ENV: str({
		desc: 'Deployment Environment',
		devDefault: 'development',
		example: 'development'
	}),
	REACT_APP_OPEN_WEATHER_MAP_BASE_URL: str({
		desc: 'Open Weather Map Base URL',
		devDefault: 'https://api.openweathermap.org/data/2.5'
	}),
	REACT_APP_OPEN_WEATHER_MAP_API_KEY: str({
		desc: 'Open Weather Map API Key'
	})
});
