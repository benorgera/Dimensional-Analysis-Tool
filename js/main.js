
(function(){
	var app = angular.module('dimApp', []);

	$.getScript(".units.js");

	app.controller('UnitsController', function() {
		this.tree = units;
	});
})();