'use strict';

module.exports = angular
	.module('app.dashboard', ['ngTouch','ngAnimate'])
	.controller('dashboardCtrl', require('./dashboard-controller') )
	.config(require('./routes'))
	.name;
