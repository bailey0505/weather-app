//pk.eyJ1IjoiYmFpbGV5MDUwNSIsImEiOiJjazJuOG84YmcwcTJxM2RtdXd1dmNtczV2In0.rlr81UBkIKER7KcXAXhdLA  ---API KEY FOR MAP BOX ---

//sample call
// https://api.mapbox.com/geocoding/v5/mapbox.places/Pittsburgh.json?access_token=pk.eyJ1IjoiYmFpbGV5MDUwNSIsImEiOiJjazJuOG84YmcwcTJxM2RtdXd1dmNtczV2In0.rlr81UBkIKER7KcXAXhdLA


const request = require('request');

//Function That Grabs the long or lat using Mapbox then Gets the weather Data from Dark Skieds 
//Written By Bailey
exports.get_loc = function(address, callback){
     var url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYmFpbGV5MDUwNSIsImEiOiJjazJuOG84YmcwcTJxM2RtdXd1dmNtczV2In0.rlr81UBkIKER7KcXAXhdLA';

     request(url, { json: true }, (err, res, body) => {
        if(err){
            //console.log("error" + err); 
            callback("error", null);
            res.end();
        } else{
            if(!body.features[0]) {
                //console.log("Un oh");
                callback("error", null);
            
            }else {
                var long = body.features[0].center[0];
                var lat =  body.features[0].center[1];
                var coords = [long, lat];
            
                var DarkSkyUrl = "https://api.darksky.net/forecast/0c1921b0942837a25ecedcaa89db0308/"
                DarkSkyUrl += coords[1] + "," + coords[0];
                request(DarkSkyUrl, { json: true }, (err, res, body) => {
                    if(err) {
                        //console.log("Error!" + err);
                        callback("error", null);
                    }else {
                       var summ = body.daily.data[0].summary;
                       var temp = body.currently.temperature;
                       var rain = body.currently.precipProbability;
                       var forecast = [summ, temp, rain];
                       // console.log(forecast);
                        callback(null, forecast);
                    }

                });
            }
            
            //console.log(DarkSkyUrl);
            //return callback(err, DarkSkyUrl);
            // console.log(coords);
            
        }
     });
}

