var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
const fs = require('fs');
var mysql = require('mysql');
var session = require('express-session');
var path = require('path');






var modules = require('./lib/modules.js');
var get_weather = require('./framework/get_weather.js');


var app = express();



app.use(express.static(__dirname + '/style'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/public')); 




app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3001);


app.get('/', function(req, res) {
 res.render('home', {
    // pictures: modules.getunopics()
 });
});
app.get('/about', function(req, res) {
    res.render('about', {
        aboutme: modules.getabout(),
        skills: modules.getskills()
    });
});
app.get('/support', function(req, res) {
    res.render('home', {
    });
});

app.get('/nytimes', function(req, res) {
    res.render('nytimes', {
    });
});

app.post('/getweather', (req, res) => {
    var address = req.body.city;
    var out = get_weather.get_loc(address);
    //console.log(out);
    //var weather = get_weather.get_weather(out);
   // console.log(weather);
});


app.use(function(req, res, next){
    res.status(404);
    res.render('404');
});
app.use(function(err, req, res, next){
   console.log(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
 console.log('Weather App is Running on Port 3001')   
});

