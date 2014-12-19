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
                templateUrl: 'snowview/graph1.html',
                controller: 'graph1Ctrl'
            })

            .state('snowview.snowview2', {
                url: '/Aspen_Colorado',
                templateUrl: 'snowview/graph2.html',
                controller: 'graph2Ctrl'
            })

            .state('snowview.snowview3', {
                url: '/Snow_bird_Utah',
                templateUrl: 'snowview/graph3.html',
                controller: 'graph3Ctrl'
            })

            .state('snowview.snowview4', {
                url: '/Alta_Utah',
                templateUrl: 'snowview/graph4.html',
                controller: 'graph4Ctrl'
            })

            .state('snowview.snowview5', {
                url: '/Vail_Colorado',
                templateUrl: 'snowview/graph5.html',
                controller: 'graph5Ctrl'
            })

            .state('snowview.snowview6', {
                url: '/All_Mountains',
                templateUrl: 'snowview/all_snowfall.html',
                controller: 'allSnowfallCtrl'
            })

            .state('storedview', {
                url: '/storedview',
                templateUrl: 'storedview.html',
                controller: 'storedViewCtrl'
            });

        $urlRouterProvider.otherwise('/');
        //$locationProvider.html5Mode(true);
    }]);