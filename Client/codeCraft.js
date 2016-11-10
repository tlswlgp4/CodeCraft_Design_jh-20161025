/**
 * Created by Ryu on 2016-07-29.
 */
'use strict';

angular.module("codeCraft", [
  "ngRoute",
  'ui.bootstrap'
])
  .config(function($routeProvider, $httpProvider){
    /*
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'main.html',
        controller: 'defaultCtrl'
      });
    */

    $routeProvider
      .when("/", {controller: "defaultCtrl", templateUrl: "main.html"})
      .when("/main", {controller: "defaultCtrl", templateUrl: "main.html"})
      .when("/courses", {controller: "coursesCtrl", templateUrl: "./courses/courses.html"})
      .when("/myClassRoom/introduceCourses/completedSubject", {controller: "introduceCoursesCtrl", templateUrl: "./courses/myClassRoom/introduceCourses_completed.html"})
      .when("/myClassRoom/introduceCourses/doingSubject", {controller: "introduceCoursesCtrl", templateUrl: "./courses/myClassRoom/introduceCourses_doing.html"})
      .when("/myClassRoom/introduceCourses/possibleSubject", {controller: "introduceCoursesCtrl", templateUrl: "./courses/myClassRoom/introduceCourses_possible.html"})
      .when("/myClassRoom/introduceProfessors", {controller: "introduceProfessorsCtrl", templateUrl: "./courses/myClassRoom/introduceProfessors.html"})
  })


