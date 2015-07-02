eventsApp.factory('eventData', function($http, $log){
        return {
            getEvent:function(successcb) {
                $http({method: 'GET', url:'data/1.json'}).
                    success(function(data,status){
                        successcb(data);
                        console.log('status :: '+status);
                      //  console.log('headers :: '+headers);
                        //console.log('config :: '+config);

                    }).
                    error(function(data,status,headers,config){
                        $log.warn(status);
                        alert(data);
                    });

                console.log("End of service!!!!");
            }
        };
    }
);