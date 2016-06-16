'use strict';

/**
 * @ngdoc function
 * @name foodieWebApp.controller:RecipeAddCtrl
 * @description
 * # RecipeAddCtrl
 * Controller of the foodieWebApp
 */
angular.module('foodieWebApp')
  .controller('RecipeAddCtrl', function ($scope, Recipe, $location) {
  $scope.recipe = {};
  $scope.saveRecipe = function() {
    Recipe.post($scope.recipe).then(function() {
      $location.path('/recipes');
    });
  };
});