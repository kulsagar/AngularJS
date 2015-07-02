eventsApp.factory('eventData', function($resource){
        var resource = $resource('data/:id'+'.json',{id:'@id'});
        return {
            getEvent:function() {
                return resource.get({id:1});
            },

            save : function (event){
                console.log('save called');
                console.log(event);
                event.id=999;
                return resource.save(event);

            }
        };
    }
);