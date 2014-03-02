'use strict';

angular.module('snapnote').controller('CreateNoteCtrl',
    function($scope) {

        $scope.options = [
            {text: "Textbox"},
            {text: "Something else"},
            {text: "Something else else"}
        ];
        
    });
	