
// Import the underscore.js library
var request = require('request');
var version = process.version; // version === 'v6.5.0'
module.exports = function (context, input) {
    context.log('JavaScript manually triggered function called with input:', input);
    var request = require('request');
    request('http://api.openweathermap.org/data/2.5/weather?q=Buenos_Aires&APPID=098e4d38a689bc231999adcb5c3fb1c3', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var temperatura = JSON.parse(body);
        context.log("La temperatura en Buenos Aires es de: " +( temperatura.main.temp - 273.15 )+ " Grados Celcius") 
     }
})  
    context.done();
};
