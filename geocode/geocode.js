const request = require('request');

var geocodeAddress = (address, key, callback) => {
    var encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${key}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback(error);
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Specified address doesn\'t exist');
        } else if (body.status === 'OK') {
            callback(undefined, {
                lat: body.results[0].geometry.location.lat,
                long: body.results[0].geometry.location.lng,
                address: body.results[0].formatted_address,
            });
        }
});
};

module.exports = {
    geocodeAddress
};