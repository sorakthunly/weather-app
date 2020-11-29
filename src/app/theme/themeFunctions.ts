const BASELINE_UNIT = 'rem';

export const withBaselineUnit = (size: number) => `${size}${BASELINE_UNIT}`;

export const getBaseline = (multiplier?: number) => {
	if (typeof multiplier === 'number') {
		return withBaselineUnit(multiplier);
	}
};
