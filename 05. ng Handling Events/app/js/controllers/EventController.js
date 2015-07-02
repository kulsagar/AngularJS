'use strict';

eventsApp.controller('EventController', 
		function EventController($scope){
		
		$scope.event={
				name: 'Angular Boot Camp',
				date: '23/02/2014',
				time: '10:30 am',
				location: {
						address: 'CapGemini India',
						city: 'pune',
						state: 'Maharashtra'
				},
				imageUrl :'img/AngularJS.png',
				sessions:[
					{
						name: 'Directives Masterclass',
						creatorName: 'Renu Kulkarni',
						duration: '1 hr',
						level : 'Advanced',
						abstract:'In this session you will learn about ins and outs about directives',
						upVoteCount: 15
						
					},
					{
						name: 'Scopes for fun and profit',
						creatorName: 'Vivek Sinha',
						duration: '30 mins',
						level : 'introductory',
						abstract:'This session will take closer loot at scopes',
						upVoteCount: 4
						
					},
					{
						name: 'Well behaved controllers',
						creatorName: 'Piyali Saha',
						duration: '1 hr',
						level : 'Intermidiate',
						abstract:'In this session you will learn how to create well behaved controllers',
						upVoteCount: 13

					}
				]
		}; // End of event object

		$scope.upVoteSession= function(session){
			 session.upVoteCount++;
            console.log("You clicked "+session.name);
		};
		
		$scope.downVoteSession= function(session){
			 session.upVoteCount--;
		};
		
	}

);