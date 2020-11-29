import { Divider, IconButton, List, Typography } from '@material-ui/core';
import React, { Fragment, FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClearIcon from '@material-ui/icons/Clear';
import styled from 'styled-components';
import { State } from '../../../app/redux/reducers';
import { getBaseline } from '../../../app/theme/themeFunctions';
import { clearCityWeather } from '../searchActions';
import { Temperature } from '../../../components/Temperature/Temperature';

const TypographyMuted = styled(Typography)`
	color: #9e9e9e;
`;

const ListItem = styled.div`
	align-items: center;
	display: flex;
	padding-bottom: ${getBaseline(0.5)};
	padding-top: ${getBaseline(0.5)};
`;

const ListItemAction = styled.div`
	margin-left: auto;
`;

const SearchHistory: FunctionComponent = () => {
	const dispatch = useDispatch();
	const cityWeathers = useSelector((state: State) => state.search.cityWeathers);
	const hasNoCityWeathers = cityWeathers.length === 0;

	return (
		<Fragment>
			<Typography gutterBottom variant="h5">
				My Search History
			</Typography>
			{hasNoCityWeathers ? (
				<TypographyMuted>You do not have any search history</TypographyMuted>
			) : (
				<List>
					{cityWeathers.map(cityWeather => {
						const { main, name, sys, uuid } = cityWeather;
						const { temp } = main;
						const { country } = sys;

						const formattedCity = `${name}, ${country}`;

						const onClearButtonClick = () => dispatch(clearCityWeather(uuid));

						return (
							<Fragment key={uuid}>
								<ListItem>
									<Typography>
										{formattedCity} - <Temperature value={temp} />
									</Typography>
									<ListItemAction>
										<IconButton onClick={onClearButtonClick}>
											<ClearIcon />
										</IconButton>
									</ListItemAction>
								</ListItem>
								<Divider light />
							</Fragment>
						);
					})}
				</List>
			)}
		</Fragment>
	);
};

export default SearchHistory;
