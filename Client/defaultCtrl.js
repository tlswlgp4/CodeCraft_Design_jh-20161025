/**
 * Created by Ryu on 2016-07-29.
 */
'use strict';

angular.module("codeCraft")
  .controller("defaultCtrl", function($scope){

    $scope.goMain = function(){
      $location.path('/');
    }

    $scope.login = true;
    // $scope.login = false;

      $scope.checkStudent = true;
      $scope.onSelectUserType = function(){
          $scope.checkStudent = !$scope.checkStudent;
      };

  });





