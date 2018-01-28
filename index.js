// http://qaru.site/questions/85794/formulas-to-calculate-geo-proximity
// https://github.com/jaxgeller/node-geo-distance
// https://github.com/demx8as6/geo-calculator/blob/master/src/geo-calculator.js

const geo = require('node-geo-distance');

const coord1 = {
  latitude: 47.221512,
  longitude: 38.9189407,
};


const coord2 = {
  latitude: 47.222671,
  longitude: 38.9171807
};

geo.vincenty(coord1, coord2, function (dist) {
  console.log(dist);
});



// https://developers.google.com/maps/documentation/geocoding/start
const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'google',

  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyAUZ_Ml89jjo6Zp5jE6iMrvcqOFTbscVZ0', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

geocoder.geocode('Petrovskaya 120, Taganrog, Russia').then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});

