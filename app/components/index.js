'use strict';

var angular = require('angular');

angular
	.module('ae', [
		// external libs
		require('angular-ui-router'),
		require('./dashboard'),
		require('./home')

	])
	.config( require('./app/routes') );

angular
    .element(document)
    .ready(function() {
        angular.bootstrap(document, ['app']);
    });
