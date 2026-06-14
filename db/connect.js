const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;
const dns = require('dns');

dns.setServers(['8.8.8.8', '1.1.1.1']);

let _db;
let _client; 

const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    if (typeof callback === 'function') {
      return callback(null, _db);
    }
    return _db;
  }

  const uri = process.env.MONGODB_URI;
  console.log("MONGODB_URI loaded:", uri ? "YES" : "MISSING");

  if (!uri) {
    if (typeof callback === 'function') {
      return callback(new Error("MONGODB_URI is missing in .env"));
    }
    throw new Error("MONGODB_URI is missing in .env");
  }

  MongoClient.connect(uri)
    .then((client) => {
      _client = client;
      _db = client;
      console.log("Successfully connected to MongoDB");
      if (typeof callback === 'function') {
        callback(null, _db);
      }
    })
    .catch((err) => {
      console.error("MongoDB Connection Error:", err.message);
      if (typeof callback === 'function') {
        callback(err);
      }
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

const closeDb = async () => {
  if (_client) {
    await _client.close();
    _db = null;
    _client = null;
    console.log("MongoDB Connection Closed");
  }
};

module.exports = { initDb, getDb, closeDb };