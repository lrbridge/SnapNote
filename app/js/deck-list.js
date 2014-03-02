'use strict';

angular.module('snapnote').controller('DeckListCtrl',
    function($scope, $location, SampleDecks) {

        // Get sample decks
        $scope.decks = SampleDecks.getMyDecks();

    });
	