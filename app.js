// const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=90960b9f68b7981b5da585d398cf8a65&query=surat&units=m'


// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unble to connect to weather server!!')
//     } else if(response.body.error) {
//         console.log('Unble to find weather loctoin!!')
//     }else{
//         console.log(response.body.current.weather_descriptions+' temparature is '+ response.body.current.temperature +' it feels like '+ response.body.current.feelslike)

//     }

// })
// request({url:url,json:true},(error,response)=>{
//     // console.log(response)
//     // const  data=JSON.parse(response.body)
//     // console.log(data.current)

//     // console.log(response.body.current)

// console.log(response.body.current.weather_descriptions+' temparature is '+ response.body.current.temperature +' it feels like '+ response.body.current.feelslike)

// })

const forcast = require('./utiles/forecast')
if (!process.argv[2]) {
    console.log('provide the loacation in commandline')
} else {

    forcast(process.argv[2], (error, {location,description,temperature,feelslike}={}) => {
        if (error) {
            console.log(error)
        }
        else {
            console.log(location)
            console.log(description[0])
            console.log('temperature is ' + temperature)
            console.log('feelslike ' + feelslike)
        }
    })
}