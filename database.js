const fs = require('fs');
var promise = require('bluebird');
var CONFIG = require('./appConfig');
var pgp = require('pg-promise')(options);
var DATABASE_PGB = pgp(CONFIG.database.postgres);

module.exports = {
       getAllLocations: getAllLocations
};

var options = {
    promiseLib: promise
};

function getAllLocations(cb) {
      DATABASE_PGB.any('SELECT ST_X(lokasi) as longitude, ST_Y(lokasi) as latitude from daftar_industri')
      .then(function (data) {
         cb(null, data);})
       .catch(function (err) {
          cb(err)});
}
