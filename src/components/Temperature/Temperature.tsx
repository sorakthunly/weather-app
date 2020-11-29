import { Fragment, FunctionComponent } from 'react';

export type TemperatureProps = {
	value: number;
};

export const Temperature: FunctionComponent<TemperatureProps> = ({ value }) => {
	const formattedValue = Math.round(value);

	return <Fragment>{formattedValue}&#8451;</Fragment>;
};
