'use strict';

module.exports = Config;

function Config($stateProvider, $urlRouterProvider) {

  // Now set up the states
  $stateProvider
    .state('app.dashboard', {
      url: 'dashboard',
      views: {
        'details@app' : {
          templateUrl: 'components/dashboard/dashboard.html',
          controller: 'dashboardCtrl'
        }
      }

    });

}
