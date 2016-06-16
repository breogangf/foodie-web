'use strict';

describe('Controller: RecipeAddCtrl', function () {

  // load the controller's module
  beforeEach(module('foodieWebApp'));

  var RecipeAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecipeAddCtrl = $controller('RecipeAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RecipeAddCtrl.awesomeThings.length).toBe(3);
  });
});
