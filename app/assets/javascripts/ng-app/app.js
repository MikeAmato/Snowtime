angular
    .module('AngularRails', [
        'ngAnimate',
        'ui.router',
        'ui.bootstrap',
        'ct.ui.router.extras',
        'templates'
    ]).config([ '$stateProvider', '$urlRouterProvider', '$locationProvider', 
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
        
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            })

            .state('snowview', {
                url: '/snowview',
                templateUrl: 'snowview.html',
                controller: 'snowViewCtrl'
            })

            .state('storedview', {
                url: '/storedview',
                templateUrl: 'storedview.html',
                controller: 'storedViewCtrl'
            });

        $urlRouterProvider.otherwise('/');
        //$locationProvider.html5Mode(true);
    }]);