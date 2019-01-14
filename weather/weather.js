const request = require('request');
// 
var getWeather = (apiKey, latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.ne/forecast/${apiKey}/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("Can't fetch the weather");
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
            });
        }
    } 
    );
};

module.exports = {
    getWeather
}