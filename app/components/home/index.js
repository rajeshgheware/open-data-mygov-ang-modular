'use strict';

module.exports = angular
	.module('app.home', [])
	.controller('homeCtrl', require('./home-controller') )
	.config(require('./routes'))
	.name;
