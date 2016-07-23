'use strict';

var angular = require('angular');

angular
	.module('app', [
		// external libs
		require('angular-ui-router'),
		require('angular-touch'),
		require('angular-animate'),
		require('angular-ui-bootstrap'),
		require('./dashboard'),
		require('./home')

	])
	.config( require('./app/routes') );

angular
    .element(document)
    .ready(function() {
        angular.bootstrap(document, ['app']);
    });
