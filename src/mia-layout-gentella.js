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
            scope: {},
            link: function (scope, element) {
                
            },
            template: '<!-- footer content --><footer><div class="pull-right">Content Manager System by <a href="http://mobileia.com">MobileIA</a></div><div class="clearfix"></div></footer><!-- /footer content -->'
        };
    };
})();