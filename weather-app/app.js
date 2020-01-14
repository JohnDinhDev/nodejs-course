const request = require("request");

const url = `https://api.darksky.net/forecast/e9c47b4c1eca9b1912ab977ef2e0b98e/37.8267,-122.42330
`;

request({ url, json: true }, (err, response, body) => {
	const currentForecast = response.body.currently;
	console.log(
		`${response.body.daily.data[0].summary} It is currently ${currentForecast.temperature} degrees out with ${currentForecast.precipProbability}% of rain.`
	);
});
