'use strict';

eventsApp.controller('EditEventController', 
	function EditEventController($scope){
	
		$scope.saveEvent= function(event, newEventForm){
			if(newEventForm.$valid){
				console.log('Event :: '+event.name +' saved!');
			}
		};
		
		$scope.cancelEdit= function(){
			
			window.location="EventDetails.html";
		};

        $scope.checkName = function(name){
            console.log('Name :: '+name);
        }

    }

);