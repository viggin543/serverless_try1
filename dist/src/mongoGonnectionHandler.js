'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConnection = undefined;

var _mongodb = require('mongodb');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const {
  mongoHost, mongoPort,
  mongoUser, mongoPass
} = _config2.default;
const connectionString = `mongodb://${mongoUser}:${mongoPass}@${mongoHost}:${mongoPort}/storage`;

let db = null;
const getConnection = exports.getConnection = (() => {
  var _ref = _asyncToGenerator(function* () {
    if (!db) {
      db = yield _mongodb.MongoClient.connect(connectionString);
    }
    return db;
  });

  return function getConnection() {
    return _ref.apply(this, arguments);
  };
})();