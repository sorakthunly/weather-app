import { createReducer } from '@reduxjs/toolkit';

import { fetchGeolocation } from './appActions';

type CurrentPosition = Partial<GeolocationPosition> & {
	isFetching: boolean;
	isIntialised: boolean;
};

export type AppState = {
	currentPosition: CurrentPosition;
};

const initialState: AppState = {
	currentPosition: {
		isFetching: false,
		isIntialised: false
	}
};

export const appReducer = createReducer(initialState, {
	[fetchGeolocation.pending.type]: state => {
		state.currentPosition.isFetching = true;
	},
	[fetchGeolocation.fulfilled.type]: (state, action: ReturnType<typeof fetchGeolocation.fulfilled>) => {
		const position = action.payload;
		const { coords } = position;
		state.currentPosition = {
			coords: {
				accuracy: coords.accuracy,
				altitude: coords.altitude,
				altitudeAccuracy: coords.altitudeAccuracy,
				heading: coords.heading,
				latitude: coords.latitude,
				longitude: coords.longitude,
				speed: coords.speed
			},
			isFetching: false,
			isIntialised: true,
			timestamp: position.timestamp
		};
	},
	[fetchGeolocation.rejected.type]: state => {
		state.currentPosition.isFetching = false;
	}
});
