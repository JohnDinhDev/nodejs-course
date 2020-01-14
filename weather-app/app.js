require("dotenv").config();
const request = require("request");

const darkSkyUrl = `https://api.darksky.net/forecast/${process.env.DARKSKY_KEY}/37.8267,-122.42330`;
const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_KEY}`;
request({ url: darkSkyUrl, json: true }, (err, response, body) => {
	const currentForecast = response.body.currently;
	console.log(
		`${response.body.daily.data[0].summary} It is currently ${currentForecast.temperature} degrees out with ${currentForecast.precipProbability}% of rain.`
	);
});

request({ url: mapBoxUrl, json: true }, (err, response) => {
	const latitude = response.body.features[0].center[1];
	const longitude = response.body.features[0].center[0];
	console.log(latitude, longitude);
});
