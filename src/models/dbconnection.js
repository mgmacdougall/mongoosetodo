const mongoose = require('mongoose');
const {mongoDB} = require('./dbconfig');

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(mongoDB)
      .then(() => console.log('Database connected'))
      .catch(err => console.log('Database connection failed.'));
  }
}

module.exports = new Database();
