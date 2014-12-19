angular
    .module('AngularRails', [
        'ngAnimate',
        'ui.router',
        'ui.bootstrap',
        'ct.ui.router.extras'
    ]).config([ '$stateProvider', '$urlRouterProvider', '$locationProvider', 
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
        //Home page 
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: "asset_path('home.html')",
                controller: 'HomeCtrl'
            })
            //beginning of the graph display area
            .state('snowview', {
                url: '/snowview',
                templateUrl: "asset_path('snowview/layout.html')"
            })
            //First graph to display
            .state('snowview.snowview1', {
                url: '/Jackson_Hole',
                templateUrl: "asset_path('snowview/graph1.html')",
                controller: 'graph1Ctrl'
            })
            //Second graph to display 
            .state('snowview.snowview2', {
                url: '/Aspen_Colorado',
                templateUrl: "asset_path('snowview/graph2.html')",
                controller: 'graph2Ctrl'
            })
            //Third graph to display
            .state('snowview.snowview3', {
                url: '/Snow_bird_Utah',
                templateUrl: "asset_path('snowview/graph3.html')",
                controller: 'graph3Ctrl'
            })
            //Fourth graph to display
            .state('snowview.snowview4', {
                url: '/Alta_Utah',
                templateUrl: "asset_path('snowview/graph4.html')",
                controller: 'graph4Ctrl'
            })
            //Fifth graph to display
            .state('snowview.snowview5', {
                url: '/Vail_Colorado',
                templateUrl: "asset_path('snowview/graph5.html')",
                controller: 'graph5Ctrl'
            })
            //Sixth graph to display
            .state('snowview.snowview6', {
                url: '/All_Mountains',
                templateUrl: "asset_path('snowview/all_snowfall.html')",
                controller: 'allSnowfallCtrl'
            })
            //Currently not used but will eventually show users stored weather data
            .state('storedview', {
                url: '/storedview',
                templateUrl: "asset_path('storedview.html')",
                controller: 'storedViewCtrl'
            });
        //Provides a reroute if any is passed in that isn't in the routes
        $urlRouterProvider.otherwise('/');
        //$locationProvider.html5Mode(true);
    }]);