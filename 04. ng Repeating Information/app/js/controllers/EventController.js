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
						creatorName: 'Sagar Kulkarni',
						duration: '1 hr',
						level : 'Advanced',
						abstract:'In this session you will learn about ins and outs about directives'
						
					},
					{
						name: 'Scopes for fun and profit',
						creatorName: 'Vivek Sinha',
						duration: '30 mins',
						level : 'introductory',
						abstract:'This session will take closer loot at scopes'
						
					},
					{
						name: 'Well behaved controllers',
						creatorName: 'Piyali Saha',
						duration: '1 hr',
						level : 'Intermidiate',
						abstract:'In this session you will learn how to create well behaved controllers'

					},
                    {
                        name: 'Testing AngularJS with Karma',
                        creatorName: 'Anil Wagh',
                        duration: '1 hr',
                        level : 'Supreme',
                        abstract:'In this session you will learn how to create well behaved controllers'

                    }

                ]
		};
		
	}

);