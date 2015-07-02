'use strict';

eventsApp.controller('EventController', 
		function EventController($scope,eventData){
		$scope.sortorder='name';
		eventData.getEvent().then(function(event){
            console.log('success');
			$scope.event=event;
		},
            function(statusCode){
                console.log('error '+statusCode);
            }
        );
	
		$scope.upVoteSession= function(session){
			 session.upVoteCount++;
		};
		
		$scope.downVoteSession= function(session){
			 session.upVoteCount--;
		};
	}
);