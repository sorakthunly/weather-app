import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCityWeatherByCoordinates } from '../../features/Search/searchActions';
import SearchPage from '../../features/Search/SearchPage';
import { fetchGeolocation } from '../appActions';
import { State } from '../redux/reducers';

const BaseLayout: FunctionComponent = () => {
	const dispatch = useDispatch();
	const coords = useSelector((state: State) => state.app.currentPosition.coords);

	useEffect(() => {
		dispatch(fetchGeolocation());
	}, [dispatch]);

	const latitude = coords?.latitude;
	const longitude = coords?.longitude;
	useEffect(() => {
		if (latitude && longitude) {
			dispatch(searchCityWeatherByCoordinates({ latitude, longitude }));
		}
	}, [dispatch, latitude, longitude]);

	return <SearchPage />;
};

export default BaseLayout;
