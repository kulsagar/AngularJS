'use strict';

var eventsApp= angular.module('eventsApp', ['ngResource', 'ngRoute'])
	.config(function($routeProvider){
		$routeProvider.when('/newEvent/:id',{
			
			templateUrl:'templates/NewEvent.html',
			controller: 'EditEventController'

		});

		$routeProvider.when('/eventDetails',{
			
			templateUrl:'templates/EventDetails.html',
			controller: 'EventController'
		});
		
		$routeProvider.otherwise({redirectTo:'/eventDetails'});

        console.log('App called.');
	});