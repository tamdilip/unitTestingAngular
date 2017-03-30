var app=angular.module('myApp', []);

app.controller('myCtrl1', function($scope) {
$scope.label = 'Label from Controller 1';
});

app.controller('myCtrl2',function(){
    var vm = this;
    vm.label = 'Label from Controller 2';
});

app.factory('myFactory', function($http) {

var store={};
store.fname='Karma Test';

store.setName=function(name){
store.lname=name;
};

store.get = function () {
   $http.get("http://localhost:8080/")
   .then(function(res){
      store.data=res.data; 
   });
};

return store;

});



