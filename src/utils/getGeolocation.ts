export const getGeolocation = () => {
	return new Promise<GeolocationPosition>((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			position => {
				resolve(position);
			},
			positionError => {
				reject(positionError);
			}
		);
	});
};
