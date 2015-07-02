eventsApp.factory('eventData', function($http, $log){
		return {
				getEvent:function(successcb) {
				$http({method: 'GET', url:'data/1.json'}).
				success(function(data,status,headers,config){
					successcb(data);
				}).
				error(function(data,status,headers,config){
					$log.warn(data,status,headers,config);
					alert(data);
				});
		}
		};	
	}
);