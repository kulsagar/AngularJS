'use strict';

eventsApp.controller('EventController', 
		function EventController($scope){
		$scope.sortorder='name';
		$scope.event={
				name: 'Angular Boot Camp',
				date: new Date(),
				time: '10:30 am',
				price: 100,
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
						duration: 1,
						level : 'advanced',
						abstract:'In this session you will learn about ins and outs about directives',
						upVoteCount: 15
						
					},
					{
						name: 'Scopes for fun and profit',
						creatorName: 'Vivek Sinha',
						duration: 2,
						level : 'introductory',
						abstract:'This session will take closer loot at scopes',
						upVoteCount: 4
						
					},
					{
						name: 'Well behaved controllers',
						creatorName: 'Piyali Saha',
						duration: 4,
						level : 'intermediate',
						abstract:'In this session you will learn how to create well behaved controllers',
						upVoteCount: 30

					}
				]
		};
	
		$scope.upVoteSession= function(session){
			 session.upVoteCount++;
		};
		
		$scope.downVoteSession= function(session){
			 session.upVoteCount--;
		};
		
	}

);