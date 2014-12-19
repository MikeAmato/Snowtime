angular.module('AngularRails')
    .controller('graph2Ctrl', [ '$scope', function ($scope) {

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
                  name: 'Aspen, Colorado',
                  data: [4.0, 3.5, 0.6, 0.4, 3.0, 0.0, 0.0]
              }]
          });
      });

    }]);