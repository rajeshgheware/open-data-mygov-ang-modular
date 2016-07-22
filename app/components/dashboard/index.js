'use strict';

module.exports = angular
	.module('app.dashboard', [])
	.controller('dashboardCtrl', require('./dashboard-controller') )
	.config(require('./routes'))
	.name;
