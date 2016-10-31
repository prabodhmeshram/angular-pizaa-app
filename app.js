var app = angular.module("pizzaApp", []);

app.controller('PizzaController',  function($scope){
	$scope.message = "This is my first Pizaa App";

	$scope.PizzaData = [{name:"Margaretta", prize: 34},{name:"Veg", prize: 30},{name:"Supreme", prize: 45},{name:"Italian Delight", prize: 40}];
});