angular.module('AngularRails')
    .controller('allSnowfallCtrl', ['$scope', function ($scope) {
      //Displays the highchart graph with the weather data

      $scope.chartConfig = {
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
                  data: [3.0, 4.0, 2.0, 1.5, 0.0, 0.0, .5]
              }, 
              {
                  name: 'Aspen, Colorado',
                  data: [4.0, 3.5, 0.6, 0.4, 3.0, 0.0, 0.0]
              }, 
              {
                  name: 'Snowbird, Utah',
                  data: [0.8, 0.1, 0.0, 0.3, 3.0, 0.0, 0.0]
              }, 
              {
                  name: 'Alta, Utah',
                  data: [0.9, 0.2, 0.0, 0.3, 3.0, 0.0, 4.0]
              }, 
              {
                  name: 'Vail, Colorado',
                  data: [5.0, 4.5, 3.0, 2.5, 3.0, 0.0, 0.0]
              }]
          };

          $('#container').highcharts($scope.chartConfig);

    }]);