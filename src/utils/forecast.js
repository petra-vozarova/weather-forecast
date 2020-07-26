const request = require('request')

const forecast =(latitude, longitude, callback)=> {
    const url= 'http://api.weatherstack.com/current?access_key=53b052863306b5aa9b9177ea19d22fc1&query=' + latitude + ',' + longitude + '&units=m'
    request({url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to find a location', undefined)
        } else if(body.error){
            callback('Unable to find a location', undefined)
        }else{
            //console.log(body.current)
            const description = body.current.weather_descriptions[0];
            const temperature =  body.current.temperature;
            const feeling = body.current.feelslike;
            const rain = body.current.precip;
            const wind = body.current.wind_speed;
            const humidity =body.current.humidity;
            callback( undefined, 'Today weather is expected to be: ' + description + '. Current temerature is ' + temperature + '°C. The feeling temperature is more likely to be around ' + feeling + '°C. The chances of percipation today  are ' +rain + '%. The strenght of the current wind is ' + wind + 'm/s. The expected level of humidity is ' + humidity + '%.')
        }
    })
}

module.exports= forecast