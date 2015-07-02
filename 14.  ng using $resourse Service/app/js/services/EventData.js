eventsApp.factory('eventData', function($resource){
        return {
            getEvent:function() {
                return $resource('data/:id'+'.json',{id:'@id'}).get({id:1});
            }
        };
    }
);