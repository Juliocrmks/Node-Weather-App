const request = require('request')

const forecast = (latitude, longitud, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ea87642deb42fc84a0c31bb5c684a224&query=' + latitude +','+ longitud + '&units=m'
    request({ url: url, json: true }, (error, { body}) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' with a chance of ' + body.current.precip+ '% of rain today')
        }

    })

}



module.exports = forecast 