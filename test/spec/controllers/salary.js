'use strict';

describe('Controller: SalaryCtrl', function () {

  // load the controller's module
  beforeEach(module('salaryHourlyCalculatorApp'));

  var SalaryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SalaryCtrl = $controller('SalaryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
