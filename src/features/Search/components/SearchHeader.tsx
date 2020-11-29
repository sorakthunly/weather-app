import { Typography } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { getBaseline } from '../../../app/theme/themeFunctions';

const SearchHeaderWrapper = styled.div`
	padding-bottom: ${getBaseline(3)};
	padding-top: ${getBaseline(3)};
`;

const SearchHeader: FunctionComponent = () => {
	return (
		<SearchHeaderWrapper>
			<Typography gutterBottom variant="h3">
				Hi, There!
			</Typography>
			<Typography gutterBottom>Looking for weather information?</Typography>
		</SearchHeaderWrapper>
	);
};

export default SearchHeader;
