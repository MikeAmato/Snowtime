angular.module('AngularRails')
.service('snowService', ['$http', function($http) {

  var that = this;
  
    //searches the event Api to get events
  this.search = function(location, date) {
    that.searchDate = date;   // save for later.
    console.log('weathersource called');
    return $http.get('/search.json', { params: { location: location, date: date }}).success(function(data) {
      that.searchEvents = data;
      console.log('eventService.search returning');
    });
  };

}]);
