'use strict';

eventsApp.controller('EventController',
    function EventController($scope,eventData){
        $scope.sortorder='name';
        //option 1

        //$scope.event=eventData.getEvent();

        /* Alternatively you can write following to do different action depending
        upon success or failure.
        */

        //Option 2
        eventData.getEvent().$promise.then(function (event){
            console.log('received data using promise.');
            $scope.event=event;
        }, function(response){
            console.log(response);
        });

        $scope.upVoteSession= function(session){
            session.upVoteCount++;
        };

        $scope.downVoteSession= function(session){
            session.upVoteCount--;
        };

    }

);