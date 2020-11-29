export const handleGET = async (URL: string) => {
	const requestOptions: RequestInit = { method: 'GET' };
	const request = new Request(URL, requestOptions);
	const response = await fetch(request);

	const responseText = await response.text();
	const data = responseText ? JSON.parse(responseText) : null;

	if (response.ok) {
		return data;
	}

	throw new Error(data.message);
};
