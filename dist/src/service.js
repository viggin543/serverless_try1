'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _formidable = require('formidable');

var _mongoGonnectionHandler = require('./mongoGonnectionHandler');

var _mongoGonnectionHandler2 = _interopRequireDefault(_mongoGonnectionHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const app = (0, _express2.default)();

app.use((req, res, next) => {
	res.append('Access-Control-Allow-Origin', ['*']);
	next();
}).get('/banana', (req, res) => {
	res.send(JSON.stringify({ banana: "this is fun !" }));
}).get('/tapuz', (req, res) => {
	res.send(JSON.stringify({ banana: "life is shit and then you die ! " }));
}).post('/article', (req, res) => {
	var form = new _formidable.IncomingForm();
	form.parse(req, (() => {
		var _ref = _asyncToGenerator(function* (err, fields, files) {
			res.writeHead(200, { 'content-type': 'application/json' });
			const db = yield (0, _mongoGonnectionHandler2.default)();
			db.collection('articales').insert(_extends({}, fields, {
				id: v1(),
				authorId: v1(),
				date: new Date()
			}));
			res.end();
		});

		return function (_x, _x2, _x3) {
			return _ref.apply(this, arguments);
		};
	})());
});

module.exports = app;