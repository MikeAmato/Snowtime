angular.module('AngularRails')
    .controller('graph1Ctrl', [ '$scope', function ($scope) {

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
                  data: [3.0, 4.0, 2.0, 1.5, 0.0, 0.0, .5]
              }]
          });
      });

    }]);