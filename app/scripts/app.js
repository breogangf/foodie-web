'use strict';

/**
 * @ngdoc overview
 * @name foodieWebApp
 * @description
 * # foodieWebApp
 *
 * Main module of the application.
 */
angular
  .module('foodieWebApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    // Set the base URL for Restangular.
    RestangularProvider.setBaseUrl('http://foodie-5labs.rhcloud.com/api');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/recipes', {
        templateUrl: 'views/recipes.html',
        controller: 'RecipesCtrl'
      })
      .when('/recipe/:id', {
        templateUrl: 'views/recipe-view.html',
        controller: 'RecipeViewCtrl'
      })
      .when('/create/recipe', {
        templateUrl: 'views/recipe-add.html',
        controller: 'RecipeAddCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('RecipeRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setRestangularFields({
      id: '_id'
    });
  });
})
.factory('Recipe', function(RecipeRestangular) {
  return RecipeRestangular.service('recipe');
});
