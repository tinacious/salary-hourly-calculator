'use strict';

angular.module('salaryHourlyCalculatorApp', [
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/hourly', {
        templateUrl: 'views/hourly.html',
        controller: 'HourlyCtrl'
      })
      .when('/salary', {
        templateUrl: 'views/salary.html',
        controller: 'SalaryCtrl'
      })
      .otherwise({
        redirectTo: '/hourly'
      });
  });
