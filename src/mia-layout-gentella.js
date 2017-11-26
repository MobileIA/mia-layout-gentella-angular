/**
 * Libreria para usar el template Gentella
 * @version v0.1.1
 * @link https://github.com/MobileIA/mia-layout-gentella-angular
 * @author Matias Camiletti <matiascamiletti@mobileia.com> 
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function() {
    'use strict';

    angular
            .module('miaLayoutGentella', [])
            .directive('gentellaFooter', gentellaFooter);
    
    gentellaFooter.$inject = [];
    
    function gentellaFooter(){
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                text: "@",
                url: "@",
                author: "@"
            },
            link: function (scope, element) {
                
            },
            template: '<!-- footer content --><footer><div class="pull-right">{{ text }} <a href="{{ url }}">{{ author }}</a></div><div class="clearfix"></div></footer><!-- /footer content -->'
        };
    };
})();