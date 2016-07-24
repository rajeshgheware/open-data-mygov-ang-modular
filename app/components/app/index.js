'use strict';

module.exports = angular
	.module('app.navigation', ['ngTouch','ngAnimate','ui.bootstrap'])
	.controller('navbarCtrl', require('./navbar-controller') )
	.config(require('./routes'))
	.name;
