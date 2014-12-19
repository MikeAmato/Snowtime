'use strict'

describe('Controller: graph3Ctrl', function() {

   beforeEach(module('AngularRails'));

  var graph3Ctrl, scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    graph3Ctrl = $controller('graph3Ctrl', {
      $scope: scope
    });
  }));


  it('Should have a variable named scope.chartConfig.chart.type', function() {
    expect(scope.chartConfig.chart.type).toEqual('line');
  });

  it('Should have a variable named scope.chartConfig.chart.title', function() {
    expect(scope.chartConfig.chart.title).toEqual('line');
  });

  it('Should have a variable named scope.chartConfig.chart.subtitle', function() {
    expect(scope.chartConfig.chart.subtitle).toEqual('line');
  });

  it('Should have a variable named scope.chartConfig.chart.xAxis', function() {
    expect(scope.chartConfig.chart.xAxis).toEqual('line');
  });

  it('Should have a variable named scope.chartConfig.chart.yAxis', function() {
    expect(scope.chartConfig.chart.yAxis).toEqual('line');
  });

  it('Should have a variable named scope.chartConfig.chart.series with name and data', function() {
    expect(scope.chartConfig.chart.series.name).toEqual('line');
    expect(scope.chartConfig.chart.series.data).toEqual('line');
  });

  
});