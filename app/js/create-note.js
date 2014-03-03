'use strict';

angular.module('snapnote').controller('CreateNoteCtrl',
    function($scope, NoteElements) {

        $scope.options = NoteElements.getElements();
        
        $scope.getStuff = function(elemText) {
            console.log("sweet");
            console.log(elemText);
            return NoteElements.getElement(elemText);
        }
            
    });
	