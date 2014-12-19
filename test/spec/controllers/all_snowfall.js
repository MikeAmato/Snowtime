'use strict'

describe('Controller: allSnowfallCtrl', function() {

  beforeEach(module('AngularRails'));

  var allSnowfallCtrl, scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    allSnowfallCtrl = $controller('allSnowfallCtrl', {
      $scope: scope
    });
  }));


  it('Should have a variable named scope.chartConfig.chart.type', function() {
    expect(scope.chartConfig['chart']['type']).toEqual('line');
  });

  it('Should have a variable named scope.chartConfig.type', function() {
    expect(scope.chartConfig.chart.title).toEqual('Daily snowfall Dec 14 - Dec 20, 2013');
  });

  it('Should have a variable named scope.chartConfig.type', function() {
    expect(scope.chartConfig.chart.subtitle.text).toEqual('Snowfall(inches)');
  });

  it('Should have a variable named scope.chartConfig.type', function() {
    expect(scope.chartConfig.chart.xAxis).toBeDefined();
  });

  it('Should have a variable named scope.chartConfig.type', function() {
    expect(scope.chartConfig.chart.yAxis).toBeDefined();
  });

  it('Should have a variable named scope.chartConfig.chart.series with name and data', function() {
    expect(scope.chartConfig.chart.series.name).toBeDefined();
    expect(scope.chartConfig.chart.series.data).toBeArrayOfObjects();
  });

  it('Should have a variable named scope.chartConfig.type', function() {
    expect(scope.chartConfig.type).toEqual('line');
  });
});