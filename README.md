# Weather Forecast Application

Source code can be accessed at [my GitHub repository](https://github.com/petra-vozarova/weather-forecast),
or you can see deployed [Weather Forecast application](https://vozarova-weather-forecast-app.herokuapp.com/) in action.

## Introduction

This web application provides the most recent information about the weather for any location chosen by a user. It interacts with
two APIs to retrieve this data.

## Functionality

### Requested Location
The user can type in any address to get the current weather information and press a button to confirm the selection. In case the wrong address is inputted,
the process terminates and the user is notified that entered location was not found.

### Retrieving Geocode
The app sends the request to the [MapBox Api](https://www.mapbox.com/). It uses its [geocoding functionality](https://docs.mapbox.com/api/search/)
to retrieve the exact latitude and longitude for the selected address. 

### Retrieving Weather Information
When the geocoding information is returned, a new request is sent to the [Weatherstack Api](https://weatherstack.com/). 
From the received JSON file, all relevant data are retrieved and fed back to the application to be displayed to the user.

### Weather Data
The message displayed to user contains the name of the location and information about current temperature, wind, humidity 
or precipitation likelihood.

### Promise Chaining
Throughout the process, promise chaining is employed to handle any error or failure in retrieving the necessary information.
In such case appropriate message is shown to the user.


## Local Deployment

To run the application locally, please download the source code from: [GitHub Source Code](https://github.com/petra-vozarova/weather-forecast)


###  Prerequisites

This application was written in Node.js using Express, Request, and HBS (handlebars) dependencies. In order to run the application you will need to have the npm package installed on your local device.

Before starting the app, please make sure that you are in the correct directory that ends with `\weather-forecast`.

In the command line run the following code:
`npm start`

Now, the app should be up and running on your local port.
Please navigate to:
[local port 3000](http://localhost:3000/weather-forecast)

#### Thank you for your time and interest in my Weather Forecast application. I hope that you enjoy it! 
