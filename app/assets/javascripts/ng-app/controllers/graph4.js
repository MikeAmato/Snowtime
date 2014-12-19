angular.module('AngularRails')
    .controller('graph4Ctrl', [ '$scope', function ($scope) {

      $(function () {

          $('#container').highcharts({
              chart: {
                  type: 'line'
              },
              title: {
                  text: 'Daily Snowfall Last Year'
              },
              subtitle: {
                  text: 'WeatherSource'
              },
              xAxis: {
                  categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
              },
              yAxis: {
                  title: {
                      text: 'Snowfall'
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
                  name: 'Alta, Utah',
                  data: [0.9, 0.2, 0.0, 0.3, 3.0, 0.0, 4.0]
              }]
          });
      });

    }]);