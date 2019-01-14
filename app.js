const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
const apiKey = 'AIzaSyCTrSSBtjY1SjqulEVvEetGnds_-kG7oiI';
const weatherApiKey = 'be283ab557447515360ce4765b3a117f';


const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Addres to fetch weather for',
        string: true
    } 
})
.help()
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.a, apiKey, (errorMessage, result) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        weather.getWeather(weatherApiKey, result.lat, result.long, (errorMessage, t) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(t.temperature);
            }
        });
    }
});



