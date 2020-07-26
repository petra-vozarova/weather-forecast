const path = require('path')
const express = require('express')
const hbs= require('hbs')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

 console.log(__dirname)
// console.log(__filename)
console.log(path.join(__dirname, '../public'))
const app = express()

//extracting port from heroku or 3000 for local if not run in heroku
const port = process.env.PORT || 3000

//define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('views', viewsPath)
app.set('view engine','hbs')
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res)=>{
    res.render('index',{
        title: 'Weather Forecast',
        name: 'Petra Vozarova'
    })
})

app.get('/weather', (req, res)=> {
    if(!req.query.address){
       return res.send({
            error: 'you must enter a valid address'
        })
    }
    geocode(req.query.address, (error,{latitude, longitude, location}={})=>{
        if(error){
            return res.send({error})
        } 
        forecast(latitude, longitude,(error, forecastData) =>{
            if(error){
                return res.send({error})
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('*', (req, res)=>{
    res.render('404', {
        title: '404',
        name: 'Petra Vozarova',
        errorMessage: 'Page not found'
    })
})


app.listen(port, ()=>{
    console.log('Server is up on port ' + port)
})