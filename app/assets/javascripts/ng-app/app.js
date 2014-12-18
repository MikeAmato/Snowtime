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
                abstract: true,
                url: '/snowview',
                templateUrl: 'snowview/side_bar.html',
                controller: 'SideBarCtrl',
            })

        $urlRouterProvider.otherwise('/');
        //$locationProvider.html5Mode(true);
    }]);