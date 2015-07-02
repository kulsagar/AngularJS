'use strict';

eventsApp.controller('EventController', 
		function EventController($scope){
		
		$scope.event={
				name: 'Angular Boot Camp',
				date: '23/02/2014',
				time: '10:30 am',
				location: {
						address: 'CapGemini India',
						city: 'pune',
						state: 'Maharashtra'
				},
				imageUrl :'img/AngularJS.png',
                eventOwner:'Jai Banafal'
		};
	}
);