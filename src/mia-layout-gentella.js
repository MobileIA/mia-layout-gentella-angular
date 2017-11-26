/**
 * Libreria para usar el template Gentella
 * @version v0.0.4
 * @link https://github.com/MobileIA/mia-layout-gentella-angular
 * @author Matias Camiletti <matiascamiletti@mobileia.com> 
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function() {
    'use strict';

    angular
            .module('miaLayoutGentella', ['mobileiaAuthentication', 'ngAnimate', 'ui.router'])
            .controller('GentellaLoginController', GentellaLoginController)
            .directive('gentellaFooter', gentellaFooter);
    
    GentellaLoginController.$inject = ['$scope', '$rootScope', 'mobileiaAuth', '$state'];

    function GentellaLoginController($scope, $rootScope, mobileiaAuth, $state) {
        var ctrl = this;
        // Seteamos clase del body
        $rootScope.bodyClass = "login";
        // Setear variables al scope
        $scope.title = $state.current.vars.title;
        /**
         * Funcion que se encarga de realizar el login.
         */
        ctrl.login = function(){
            mobileiaAuth.signInWithEmailAndPassword({ 
                email: $scope.email, 
                password: $scope.password,
                callback: function(success, error){
                    if(!success){
                        // No se ha podido loguear
                        alert(error.message);
                        return false;
                    }
                    // Redirigir a la home
                    $state.go($state.current.vars.successState);
                }
            });
        };
    }
    
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