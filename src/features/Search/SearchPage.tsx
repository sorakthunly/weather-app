import { Divider, LinearProgress } from '@material-ui/core';
import React, { Fragment, FunctionComponent } from 'react';
import styled from 'styled-components';
import { getBaseline } from '../../app/theme/themeFunctions';
import SearchHistory from './components/SearchHistory';
import SearchHeader from './components/SearchHeader';
import SearchForm from './components/SeachForm';
import { useSelector } from 'react-redux';
import { State } from '../../app/redux/reducers';
import CurrentLocationWeather from './components/CurrentLocationWeather';

const SearchPageContainer = styled.div`
	margin-left: auto;
	margin-right: auto;
	max-width: 1024px;
	padding-left: ${getBaseline(1)};
	padding-right: ${getBaseline(1)};
`;

const DividerLarge = styled(Divider)`
	margin-bottom: ${getBaseline(3)};
	margin-top: ${getBaseline(3)};
`;

const LinearProgressFixed = styled(LinearProgress)`
	top: 0;
	left: 0;
	right: 0;
	position: fixed;
`;

const SearchPage: FunctionComponent = () => {
	const isSearching = useSelector((state: State) => state.search.isSearching);

	return (
		<Fragment>
			{isSearching && <LinearProgressFixed />}
			<SearchPageContainer>
				<SearchHeader />
				<CurrentLocationWeather />
				<SearchForm />
				<DividerLarge />
				<SearchHistory />
			</SearchPageContainer>
		</Fragment>
	);
};

export default SearchPage;
