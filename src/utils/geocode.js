const request = require('request')


const geocode = (address, callback) => {
    const mapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoianVsaXVzY3JtIiwiYSI6ImNrZ2E5d3JtcTA1N3YzMHFxeHNmeWQ0NXcifQ._feTz_GDSavdk22OsnkChg'
    request({ url: mapbox, json: true }, (error, {body}) => {

        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.features.length == 0) {
            callback('Unable to find location, Try another Search.', undefined)
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                long: body.features[0].center[0],
                location: body.features[0].place_name
            })

        }
    })
}



module.exports = geocode 

