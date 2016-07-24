'use strict';

module.exports = angular
	.module('app.home', ['ui.grid','ui.bootstrap'])
	.controller('homeCtrl', require('./home-controller') )
	.config(require('./routes'))
	.name;
