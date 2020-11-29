import { CircularProgress, Typography } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../app/redux/reducers';
import { Temperature } from '../../components/Temperature/Temperature';

const CurrentLocationWeather: FunctionComponent = () => {
	const cityWeather = useSelector((state: State) => state.search.currentCityWeather);

	if (!cityWeather) {
		return <CircularProgress />;
	}

	const { name, main } = cityWeather;
	const { temp } = main;

	return (
		<Typography gutterBottom variant="h6">
			{name} - <Temperature value={temp} />
		</Typography>
	);
};

export default CurrentLocationWeather;
