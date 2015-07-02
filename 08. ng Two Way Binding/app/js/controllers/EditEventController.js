'use strict';

eventsApp.controller('EditEventController', 
	function EditEventController($scope){
	
		$scope.saveEvent= function(event, newEventForm){
				window.alert('Event :: '+event.name +' saved!');
		};
		
		$scope.cancelEdit= function(){
			
			window.location="EventDetails.html";
		};
}

);