// API Key: c6787ce44a59d7692d3ff039eeb27b53
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
// Eg. https://api.darksky.net/forecast/c6787ce44a59d7692d3ff039eeb27b53/49.26219709999999,-123.1785106

const request = require('request');

const getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/c6787ce44a59d7692d3ff039eeb27b53/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if(error) {
      callback('Unable to connect to Forecast.io server.');
    } else if(response.statusCode === 400) {
      callback('Unable to fetch weather.');
    } else if(response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }

    // if(!error && response.statusCode === 200) {
    //   console.log('----------------------------');
    //   console.log('Current Temperature:', body.currently.temperature);
    // } else {
    //   console.log('Unable to fetch weather.');
    // }

  })


}


module.exports.getWeather = getWeather;
