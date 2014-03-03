'use strict';


// Declare app level module which depends on filters, and services
var snapnote = angular.module('snapnote', [
  'ngRoute',
//  'myApp.filters',
//  'myApp.services',
//  'myApp.directives',
//  'myApp.controllers'
]);

snapnote.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', 
    {
        templateUrl: 'partials/deck-list.html', 
        controller: 'DeckListCtrl'
    })
    .when('/login', 
    {
        templateUrl: 'partials/login.html', 
        controller: 'LoginCtrl'
    })
    .when('/createNote', 
    {
        templateUrl: 'partials/create-note.html', 
        controller: 'CreateNoteCtrl'
    })
    .otherwise(
    {
        redirectTo: '/'
    });
}]);

snapnote.factory('NoteElements', function() {
  
    var options = [
            {
                text: "Textbox",
                content: "<textbox></textbox>"
            },
            {
                text: "Textbox",
                content: "<textbox></textbox>"
            },
            {
                text: "Textbox",
                content: "<textbox></textbox>"
            }
        ];
    
    return {
		getElements: function() {
			return options;
		},
        getElement: function(text) {
            for(var x in options) {
                var option = options[x];
                if(option.text == text) {
                    return option.content;
                }
            }
            return "<p>No element matched</p>";
        }
	}
});

snapnote.factory('SampleDecks', function() {
	
    var decks = [
        {
            id: 1,
            name: "Addition",
            topCard: 0,
            cards: [
                {
                    id: 1,
                    front: "img/decks/addition/notecard-1-blur.png",
                    back: "img/decks/addition/notecard-1.png"
                }
            ],
            created: false,
            deleted: false,
            owned: true
        },
        {
            id: 2,
            name: "Subtraction",
            topCard: 0,
            cards: [
                {
                    id: 5,
                    front: "img/decks/subtraction/notecard-1-blur.png",
                    back: "img/decks/subtraction/notecard-1.png"
                }
            ],
            created: false,
            deleted: false,
            owned: true
        },
        {
            id: 3,
            name: "Chemistry",
            topCard: 0,
            cards: [
                {
                    id: 9,
                    front: "mg/decks/chemistry/notecard-1-blur.png",
                    back: "img/decks/chemistry/notecard-1.pngg"
                }
            ],
            created: true,
            deleted: false,
            owned: true
        }
    ];
    
	return {
		getMyDecks: function() {
			return decks;
		}
	}
	
});