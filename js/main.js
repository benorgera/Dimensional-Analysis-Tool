{function() {
	var app = angular.module('dimApp', []);

	app.controller('UnitsController', function() {
		this.tree = units;
	});

	var units = require('./units.js').units;
}}