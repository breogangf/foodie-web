'use strict';

/**
 * @ngdoc function
 * @name foodieWebApp.controller:RecipesCtrl
 * @description
 * # RecipesCtrl
 * Controller of the foodieWebApp
 */
angular.module('foodieWebApp')
.controller('RecipesCtrl', function ($scope, Recipe) {
  $scope.recipes = Recipe.getList().$object;
});