eventsApp.factory('eventData', function($http, $log, $q){
        return {
            getEvent:function() {
                var deferred = $q.defer();
                $http({method: 'GET', url:'data/1.json'}).
                    success(function(data){
                        deferred.resolve(data);
                    }).
                    error(function(data,status){
                        deferred.reject(status);
                    });
                return deferred.promise;
            }
        };
    }
);