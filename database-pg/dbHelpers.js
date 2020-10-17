const { Pool } = require('pg');
const pool = require('./index.js');

module.exports = {

  searchLocations: (searchTerm, callback) => {
    pool.query(`SELECT city FROM locations WHERE city LIKE '${searchTerm}%' LIMIT 5;`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  searchCamps: (searchTerm, callback) => {
    pool.query(`SELECT name FROM locations WHERE name LIKE '${searchTerm}%' LIMIT 8;`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

};