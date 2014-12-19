angular.module('AngularRails')
    .controller('graph4Ctrl', [ '$scope', function ($scope) {
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
                  name: 'Alta, Utah',
                  data: [0.9, 0.2, 0.0, 0.3, 3.0, 0.0, 4.0]
              }]
          });
      });

    }]);