'use strict';

angular.module('snapnote').controller('ChooseImageCtrl',
    function ($scope) {
		
		// The user's photo library
		$scope.photos = [
            "img/demoslides/whiteboard1.png",
            "img/demoslides/whiteboard2.png",
            "img/demoslides/screen1.png"
        ];
				      	  
	});