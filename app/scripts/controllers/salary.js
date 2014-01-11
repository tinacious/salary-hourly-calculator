'use strict';

angular.module('salaryHourlyCalculatorApp')
  .controller('SalaryCtrl', function ($scope) {
    $scope.vacation = 2;
    $scope.hoursPerDay = 7.5;
    $scope.salary = '';

    $scope.hourly = '';
    $scope.salaryPaidVacation = '';
    $scope.daily = '';
    $scope.weekly = '';

    $scope.vacationValue = '';
    
    $scope.updateHourly = function () {
      $scope.weekly = $scope.salary / (52 - $scope.vacation);
      $scope.daily = $scope.weekly / 5;
      $scope.hourly = $scope.daily / $scope.hoursPerDay;
      $scope.vacationValue = $scope.weekly * $scope.vacation;
    };
  });
