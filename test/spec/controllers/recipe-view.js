'use strict';

describe('Controller: RecipeViewCtrl', function () {

  // load the controller's module
  beforeEach(module('foodieWebApp'));

  var RecipeViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecipeViewCtrl = $controller('RecipeViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RecipeViewCtrl.awesomeThings.length).toBe(3);
  });
});
