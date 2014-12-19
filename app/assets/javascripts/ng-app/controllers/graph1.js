angular.module('AngularRails')
    .controller('graph1Ctrl', [ '$scope', '$http', function ($scope, $http) {
      //will be used to store data passed for the database
      $scope.snowdatum = []; //nil
      //Calls the database to get the requested data
      $http.get('/snowdata/1.json').success(function(data) {
        $scope.snowdatum = data;
      });
      //Displays the highchart graph with the weather data
      $(function () {

          $('#container').highcharts({
              chart: {
                  type: 'line'
              },
              title: {
                  text: 'Daily snowfall Dec 14 - Dec 20, 2013'
              },
              subtitle: {
                  text: 'WeatherSource'
              },
              xAxis: {
                  categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
              },
              yAxis: {
                  title: {
                      text: 'Snowfall(inches)'
                  }
              },
              plotOptions: {
                  line: {
                      dataLabels: {
                          enabled: true
                      },
                      enableMouseTracking: false
                  }
              },
              series: [{
                  name: 'Jackson Hole, Wyoming',
                  data: [3.0, 1.5, 2.0, 0.5, 4.0, 1.0, 0.0]
              }]
          });
      });

    }]);