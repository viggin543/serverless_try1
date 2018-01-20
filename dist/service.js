"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var formidable_1 = require("formidable");
var mongoGonnectionHandler_1 = require("./mongoGonnectionHandler");
var uuid_1 = require("uuid");
exports.app = express();
exports.app.use(function (req, res, next) {
    res.append('Access-Control-Allow-Origin', ['*']);
    next();
})
    .get('/banana', function (req, res) {
    res.send(JSON.stringify({ banana: "this is fun !" }));
})
    .get('/tapuz', function (req, res) {
    res.send(JSON.stringify({ banana: "life is shit and then you die ! " }));
})
    .get('/data', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var db, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, mongoGonnectionHandler_1.getConnection()];
            case 1:
                db = _c.sent();
                _b = (_a = res).send;
                return [4 /*yield*/, db.collection('articales')
                        .find({}, { limit: 10 }).toArray()];
            case 2:
                _b.apply(_a, [_c.sent()]);
                return [2 /*return*/];
        }
    });
}); })
    .post('/article', function (req, res) {
    var form = new formidable_1.IncomingForm();
    form.parse(req, function (err, fields, files) { return __awaiter(_this, void 0, void 0, function () {
        var db;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    res.writeHead(200, { 'content-type': 'application/json' });
                    return [4 /*yield*/, mongoGonnectionHandler_1.getConnection()];
                case 1:
                    db = _a.sent();
                    return [4 /*yield*/, db.collection('articales').insert(__assign({}, fields, { id: uuid_1.v1(), authorId: uuid_1.v1(), date: new Date() })).catch(function (e) { return console.log(e); })];
                case 2:
                    _a.sent();
                    res.end();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=service.js.map