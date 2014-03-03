'use strict';

/* Directives */

angular.module('snapnote')
    .directive('textbox', function() {
        return {
            restrict: 'E',
            template: "<div id='textbox' draggable class='col-lg-4 dragme'>"+
                "<p>Drag me around</p>"+
                "<input class='form-control input-lg' type='text' id='inputLarge'></div>"
        };
    });

angular.module('snapnote')
    .directive('draggable', function() {
        return {
            restrict: 'A',
            link: function(scope, elm) {
                elm.draggable({ snap: ".bootstrap-grid",
                                snapMode: "inner",
                                opacity: 0.7, 
                                helper: "clone"}
                             );
            }
        };
    });

angular.module('snapnote')
    .directive('droppable', function($compile) {        
        return {
            restrict: 'A',
            link: function($scope, $element) {
                $element.droppable({
                    hoverClass: "hover",
                    drop: function( event, ui ) {
                        console.log(ui.draggable);
                        
                        var stuff = $scope.getStuff(ui.draggable.text());
                        console.log(stuff);
                        var el = $compile( stuff )( $scope );

                        $element.append( el );
//                        var dragged = angular.element(ui.draggable).parent();
//                        var dropped = angular.element(this);
//                        var el = $compile( "<textbox></textbox>" )( $scope );
//                        $element.append( el );
                    }
                });
            }
        };
    });