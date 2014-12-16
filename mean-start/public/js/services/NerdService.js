angular.module('NerdService', []).factory('Nerd', ['$http', function($http) {

  return {
    // call to get all nerds
    get : function() {
      return $http.get('/api/nerds');
    },

    // these will work when API routes are defined in Node
    // call to POST to create new nerd
    create : function(nerdData) {
      return $http.post('/api/nerds', nerdData);
    },

    // call to DELETE a nerd
    delete : function(id) {
      return $http.delete('/api/nerds/' + id);
    }

  };

}]);