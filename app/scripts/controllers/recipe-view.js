'use strict';

/**
 * @ngdoc function
 * @name foodieWebApp.controller:RecipeViewCtrl
 * @description
 * # RecipeViewCtrl
 * Controller of the foodieWebApp
 */
angular.module('foodieWebApp')
  .controller('RecipeViewCtrl', function (
  $scope,
  $routeParams,
  Recipe
) {
  $scope.viewRecipe = true;
  $scope.recipe = Recipe.one($routeParams.id).get().$object;
});
