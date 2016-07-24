'use strict';

var angular = require('angular');
window.$ = window.jQuery = require('jquery');

angular
	.module('app', [
		// external libs
		require('angular-touch'),
		require('angular-animate'),
		require('angular-ui-router'),
		require('angular-ui-bootstrap'),
		// require('angular-ui-grid'),
		// require('bootstrap'),
		// require('jquery'),
		require('./dashboard'),
		require('./home'),
	])
	.config( require('./app/routes') );

angular
    .element(document)
    .ready(function() {
        angular.bootstrap(document, ['app']);
    });
