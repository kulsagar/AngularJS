'use strict';

eventsApp.controller('EditEventController', 
	function EditEventController($scope,$routeParams){
	
		$scope.saveEvent= function(event, newEventForm){
			if(newEventForm.$valid){
				window.alert('Event :: '+event.name +' saved!');
			}
		};
		
		$scope.cancelEdit= function(){
			
			window.location="EventDetails.html";
		};
        $scope.id = $routeParams.id;

        console.log("ID :: "+$scope.id);
    }

);