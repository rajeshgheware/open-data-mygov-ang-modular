'use strict';

module.exports = angular
	.module('app.dashboard', ['ngTouch','ngAnimate','ui.bootstrap'])
	.controller('dashboardCtrl', require('./dashboard-controller') )
	.config(require('./routes'))
	.name;
