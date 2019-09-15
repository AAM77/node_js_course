if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const request = require('request');

const darkskyUrl = `https://api.darksky.net/forecast/${process.env.DARKSKY_TOKEN}/37.8267,-122.4233`

request({ url: darkskyUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service!')
  } else {
    if (response.body.error) {
      console.log('Unable to find location.');
    } else {
      const currentWeather = response.body.currently;
      const dailyWeather = response.body.daily.data[0].summary;
      const currentTemp = dailyWeather.temperature;
      const chanceOfRain = dailyWeather.precipProbability;

      const weatherForecast = `${dailyWeather} It is currently ${currentTemp} degrees out. There is a ${chanceOfRain}% chance of rain.`
      console.log(weatherForecast);
    }
  }
});


// Geocoding API via mapbox
// address --> lat/long
const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_TOKEN}&limit=1`;

request({ url: geocodeUrl, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to geocoding service!')
  } else {
    if (response.body.features.length === 0) {
      console.log('Unable to find location. Try another search.\n');
    } else {
      const coordinates = response.body.features[0].center;
      const latitude = coordinates[1];
      const longitude = coordinates[0];

      console.log(
        `Latitude: ${latitude}\nLongitude: ${longitude}\n`
      );
    }
  }
});
