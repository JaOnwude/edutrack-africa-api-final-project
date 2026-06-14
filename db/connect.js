// // const dotenv = require('dotenv');
// // dotenv.config();
// // const MongoClient = require('mongodb').MongoClient;

// // let _db;

// // const initDb = (callback) => {
// //   if (_db) {
// //     console.log('Db is already initialized!');
// //     return callback(null, _db);
// //   }

// //   MongoClient.connect(process.env.MONGODB_URI)
// //     .then((client) => {
// //       _db = client;
// //       console.log("Connected to MongoDB");
// //       callback(null, _db);
// //     })
// //     .catch((err) => {
// //       console.error("MongoDB Connection Error:", err);
// //       callback(err);
// //     });
// // };

// // const getDb = () => {
// //   if (!_db) {
// //     throw Error('Db not initialized');
// //   }
// //   return _db;
// // };

// // module.exports = { initDb, getDb };

// const dotenv = require('dotenv');
// dotenv.config();

// const MongoClient = require('mongodb').MongoClient;
// const dns = require('dns');

// // Force reliable DNS servers
// dns.setServers(['8.8.8.8', '1.1.1.1']);

// let _db;

// const initDb = (callback) => {
//   if (_db) {
//     console.log('Db is already initialized!');
//     return callback(null, _db);
//   }

//   const uri = process.env.MONGODB_URI;
//   console.log("MONGODB_URI loaded:", uri ? "YES" : "MISSING");

//   if (!uri) {
//     return callback(new Error("MONGODB_URI is missing in .env"));
//   }

//   MongoClient.connect(uri)
//     .then((client) => {
//       _db = client;
//       console.log("Successfully connected to MongoDB");
//       callback(null, _db);
//     })
//     .catch((err) => {
//       console.error("MongoDB Connection Error:", err.message);
//       callback(err);
//     });
// };

// const getDb = () => {
//   if (!_db) {
//     throw Error('Db not initialized');
//   }
//   return _db;
// };

// module.exports = { initDb, getDb };


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
    return callback(null, _db);
  }

  const uri = process.env.MONGODB_URI;
  console.log("MONGODB_URI loaded:", uri ? "YES" : "MISSING");

  if (!uri) {
    return callback(new Error("MONGODB_URI is missing in .env"));
  }

  MongoClient.connect(uri)
    .then((client) => {
      _client = client;
      _db = client;
      console.log("Successfully connected to MongoDB");
      callback(null, _db);
    })
    .catch((err) => {
      console.error("MongoDB Connection Error:", err.message);
      callback(err);
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