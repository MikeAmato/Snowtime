angular.module('AngularRails')
    .controller('graph1Ctrl', [ '$scope', '$http', function ($scope, $http) {

      $scope.snowdatum = [];

      $http.get('/snowdata/1.json').success(function(data) {
        $scope.snowdatum = data;
      });

      $(function (snowdatum) {

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
                  name: snowdatum[0].location,
                  data: snowdatum[0].snowfall
              }]
          });
      });

    }]);