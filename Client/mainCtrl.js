/**
 * Created by Ryu on 2016-07-29.
 */
'use strict';

angular.module("codeCraft")
  .controller("mainCtrl", function($scope, $location, $rootScope){
  // .controller("defaultCtrl", function($scope){

    $rootScope.$emit("loginPage", true);



    $scope.subjectInfoFunc = function(){
      $location.path('/subjectInfo');
    }

  });



