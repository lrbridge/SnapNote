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
    .directive('droppable', function() {        
        return {
            restrict: 'A',
            link: function(scope, elm) {
                elm.droppable({
                    hoverClass: "hover",
                    drop: function( event, ui ) {
                        console.log(ui.draggable);
                        $( "<li></li>" ).text( ui.draggable.text() ).appendTo( this );
                    }
                });
            }
        };
    });