const request = require('request')
const forcast = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=90960b9f68b7981b5da585d398cf8a65&query=' + encodeURIComponent(address) + '&units=m'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unble to connect to weather server!!', undefined)
        } else if (body.error) {
            callback('Unble to find weather loctoin!!', undefined)
        } else {
            callback(undefined, {
                description: body.current.weather_descriptions,
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                location: body.location.name + ',' + body.location.region + ',' + body.location.country
            })
        }
    })
}

module.exports = forcast;