'use strict';

module.exports = Config;

function Config($stateProvider, $urlRouterProvider) {

  // Now set up the states
  $stateProvider
    .state('app.home', {
      url: 'home',
      views: {
        'details@app' : {
          templateUrl: 'components/home/home.html',
          controller: 'homeCtrl'
        }
      }

    });

}
