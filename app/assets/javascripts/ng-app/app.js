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
                templateUrl: 'snowview/layout.html'
            })

            .state('snowview.snowview1', {
                url: '/Jackson_Hole',
                templateUrl: 'graph1.html',
                controller: 'graph1Ctrl'
            })

            .state('snowview.snowview2', {
                url: '/Aspen_Colorado',
                templateUrl: 'graph2.html',
                controller: 'graph2Ctrl'
            })

            .state('snowview.snowview3', {
                url: '/Snow_bird_Utah',
                templateUrl: 'graph3.html',
                controller: 'graph3Ctrl'
            })

            .state('snowview.snowview4', {
                url: '/Alta_Utah',
                templateUrl: 'graph4.html',
                controller: 'graph4Ctrl'
            })

            .state('snowview.snowview5', {
                url: '/Vail_Colorado',
                templateUrl: 'graph5.html',
                controller: 'graph5Ctrl'
            })

            .state('storedview', {
                url: '/storedview',
                templateUrl: 'storedview.html',
                controller: 'storedViewCtrl'
            });

        $urlRouterProvider.otherwise('/');
        //$locationProvider.html5Mode(true);
    }]);