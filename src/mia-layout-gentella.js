/**
 * Libreria para usar el template Gentella
 * @version v0.0.6
 * @link https://github.com/MobileIA/mia-layout-gentella-angular
 * @author Matias Camiletti <matiascamiletti@mobileia.com> 
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function() {
    'use strict';

    angular
            .module('miaLayoutGentella', ['mobileiaAuthentication', 'ngAnimate', 'ui.router'])
            .controller('GentellaLoginController', GentellaLoginController)
            .directive('gentellaFooter', gentellaFooter)
            .directive('gentellaMenu', gentellaMenu)
            .directive('gentellaMenuProfileQuick', gentellaMenuProfileQuick);
    /**
     * Controllers
     */
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
    /**
     * Directives
     */
    function gentellaMenu(){
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                items: "="
            },
            link: function (scope, element) {
                
            },
            template: '<!-- sidebar menu -->'+
                '<div id="sidebar-menu" class="main_menu_side hidden-print main_menu">'+
                    '<div class="menu_section">'+
                        '<h3>Menu</h3>'+
                        '<ul class="nav side-menu">'+
                            '<li ui-sref-active="active" ng-repeat="item in items"><a ui-sref="{{ item.sref }}()"><i class="fa {{ item.icon }}"></i>{{ item.title }}</a></li>'+
                        '</ul>'+
                    '</div>'+
                '</div>'+
                '<!-- /sidebar menu -->'
        };
    };
    
    function gentellaMenuProfileQuick(){
        return {
            restrict: 'EA',
            replace: true,
            link: function (scope, element) {
                
            },
            template: '<!-- menu profile quick info -->'+
                '<div class="profile clearfix">'+
                    '<div class="profile_pic">'+
                        '<img src="./template/gentelella/images/img.jpg" alt="..." class="img-circle profile_img">'+
                    '</div>'+
                    '<div class="profile_info">'+
                        '<span>Bienvenido,</span>'+
                        '<h2>{{ currentUser.firstname }}</h2>'+
                    '</div>'+
                '</div>'+
                '<!-- /menu profile quick info -->'
        };
    };
    
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