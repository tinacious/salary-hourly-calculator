'use strict';

angular.module('salaryHourlyCalculatorApp')
  .controller('HourlyCtrl', function ($scope) {
    $scope.vacation = 2;
    $scope.hoursPerDay = 7.5;

    $scope.hourly = '';
    $scope.salary = '';
    $scope.salaryPaidVacation = '';
    $scope.daily = '';
    $scope.weekly = '';

    $scope.vacationValue = '';
    
    $scope.updateSalary = function () {
      $scope.daily = $scope.hourly * $scope.hoursPerDay;
      $scope.weekly = $scope.daily * 5;
      $scope.salary = $scope.weekly * (52 - $scope.vacation);
      $scope.salaryPaidVacation = $scope.weekly * 52;
      $scope.vacationValue = $scope.weekly * $scope.vacation;
    };
  });