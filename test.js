var request = require('request');
var sprintf = require("sprintf-js").sprintf,
    vsprintf = require("sprintf-js").vsprintf;

function cacheCars(make, model, yearMin, yearMax){
  var requestURL = sprintf('https://trademe-api-proxy.herokuapp.com/v1/Search/Motors/Used.json?make=%s&model=%s&year_max=%d&year_min=%d', make, model, yearMax, yearMin);
  console.log(requestURL);
  request(requestURL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var cars = JSON.parse(body)['List'];
      console.log(cars);
      return cars;
    }
  })
}

var cars = cacheCars('toyota', 'rav4', 2000, 2014);
console.log(cars);
/*
for (i= 0; i < cars.length; i++) {
  car = cars[i]
  console.log(car['ListingId']);
  console.log(car['StartPrice']);
  console.log(car['PriceDisplay'])
  if (car.hasOwnProperty('BuyNow')) {
    console.log(car['BuyNow']);
  }
}*/
