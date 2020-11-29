import { Button, FormControl, TextField } from '@material-ui/core';
import React, { FormEvent, FunctionComponent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { State } from '../../app/redux/reducers';
import { getBaseline } from '../../app/theme/themeFunctions';
import { searchCityWeather } from '../Search/searchActions';

const FieldSet = styled.fieldset`
	border: none;
	margin: 0;
	padding: 0;
`;

const FormControlWithSpacingBottom = styled(FormControl)`
	margin-bottom: ${getBaseline(1)};
`;

const SearchForm: FunctionComponent = () => {
	const dispatch = useDispatch();
	const [city, setCity] = useState('');
	const isSearching = useSelector((state: State) => state.search.isSearching);
	const errorMessage = useSelector((state: State) => state.search.errorMessage);

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (city) {
			dispatch(searchCityWeather(city));
		}
	};

	return (
		<form onSubmit={onSubmit}>
			<FieldSet disabled={isSearching}>
				<FormControlWithSpacingBottom fullWidth>
					<TextField
						error={!!errorMessage}
						helperText={errorMessage}
						id="city"
						label="Enter city name here"
						onChange={event => setCity(event.target.value)}
						value={city}
					/>
				</FormControlWithSpacingBottom>
				<Button variant="contained" color="primary" type="submit">
					Search
				</Button>
			</FieldSet>
		</form>
	);
};

export default SearchForm;
