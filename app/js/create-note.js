'use strict';

angular.module('snapnote').controller('CreateNoteCtrl',
    function($scope) {

        $scope.options = [
            {text: "a"},
            {text: "ab"},
            {text: "abc"}
        ];
        
        $( ".draggable" ).draggable({ revert: true, helper: "clone" });
    });
	