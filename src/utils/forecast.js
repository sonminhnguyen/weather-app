//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const request = require('request')

const forecast = (latitude, longtitude, callback) => {
  const url = 'https://api.darksky.net/forecast/7d9e5b3f67052e0331700405a04cef9e/' + latitude + ',' + longtitude
  console.log(url)
  request({url: url, json: true}, (error, response) => {
    if(error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (response.body.error) {  //error.body?
      callback(response.body.error, undefined)
    } else {
      callback(undefined,'Summary: ' + response.body.currently.summary + '\n' + 
      'The temperature is: ' + response.body.currently.temperature + '\n' + 'Wind\'s Speed: ' + response.body.currently.windSpeed)
    }
  })  
}

module.exports = forecast