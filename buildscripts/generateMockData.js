"use strict";
exports.__esModule = true;
//@ts-ignore
var jsf = require("json-schema-faker");
//@ts-ignore
var mockDataSchema_1 = require("./mockDataSchema");
var fs = require("fs");
var chalk = require("chalk");
var faker = require("faker");
var json = JSON.stringify(jsf.generate(mockDataSchema_1.userSchema));
fs.writeFile('./src/api/db.json', json, function (err) {
    err ? console.log(err) : console.log(chalk["default"]('mock data generated'));
    console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
});
