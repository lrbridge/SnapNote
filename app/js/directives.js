'use strict';

/* Directives */

angular.module('snapnote')
    .directive('textbox', function() {
        return {
            restrict: 'E',
            template: "<div draggable class='ui-widget-content col-lg-4 dragme'>"+
                "<p>Drag me around</p>"+
                "<input class='form-control input-lg' type='text' id='inputLarge'></div>"
        };
    });

angular.module('snapnote')
    .directive('draggable', function() {
        return {
            restrict: 'A',
            link: function(scope, elm) {
                elm.draggable();
            }
        };
    });

angular.module('snapnote')
    .directive('droppable', function() {
        return {
            restrict: 'A',
            link: function(scope, elm) {
                elm.droppable({
                    drop: function( event, ui ) {
                        $( this ).addClass( "ui-state-highlight" ).find( "p" ).html( "Dropped!" );
                        console.log("yay dropped!");
                    }
                });
            }
        };
    });