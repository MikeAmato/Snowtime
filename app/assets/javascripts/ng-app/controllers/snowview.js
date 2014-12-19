angular.module('AngularRails')
    .controller('snowViewCtrl', [ '$scope', function ($scope) {

      //used for testing the graph
      $(function () {

          $('#container').highcharts({
              chart: {
                  type: 'line'
              },
              title: {
                  text: 'Daily snowfall'
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
                  name: 'Jackson Hole, Wyoming',
                  data: [3.0, 4.0, 2.0, 1.5, 0.0, 0.0, .5]
              }, {
                  name: 'Aspen, Colorado',
                  data: [4.0, 3.5, .6, .4, 3.0, 0.0, 0.0]
              }]
          });
      });

    }]);