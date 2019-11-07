//pk.eyJ1IjoiYmFpbGV5MDUwNSIsImEiOiJjazJuOG84YmcwcTJxM2RtdXd1dmNtczV2In0.rlr81UBkIKER7KcXAXhdLA  ---API KEY FOR MAP BOX ---

//sample call
// https://api.mapbox.com/geocoding/v5/mapbox.places/Pittsburgh.json?access_token=pk.eyJ1IjoiYmFpbGV5MDUwNSIsImEiOiJjazJuOG84YmcwcTJxM2RtdXd1dmNtczV2In0.rlr81UBkIKER7KcXAXhdLA


const request = require('request');

//Function That Grabs the long or lat using Mapbox to give back to controller
//Written By Bailey
exports.get_loc = function(address){
 var url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYmFpbGV5MDUwNSIsImEiOiJjazJuOG84YmcwcTJxM2RtdXd1dmNtczV2In0.rlr81UBkIKER7KcXAXhdLA';
    var coords = [];
    
    
    request(url, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        
        var long = body.features[0].center[0];
        var lat =  body.features[0].center[1];
        
        var coords = [];
        coords.push(long);
        coords.push(lat);
        console.log(coords); 
     });
    
    console.log(coords);
   // return back;
}
//Function That Will Give back the weather Data from the long and lat that has been given
//Written By Bailey 
exports.get_weather = function(coords) {
    
    //console.log(coords);
    var long = coords[0];
    var lat = coords[1];
    
    return long;
 
}