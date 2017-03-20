'use strict';
/* global angular */

angular.module('app.home', [])

.controller('home.ctrl', function($scope, particlesJS){
    particlesJS.init();

    $scope.menu = {};
    $scope.menu.active = false;
    // Seta se o menu está ativo ou não
    $scope.setMenuActive = function(active){
      if(active != $scope.menu.active){
        $scope.menu.active = active;
        $scope.$digest();
      }
    };
    // Scroll event
    document.addEventListener('scroll', function(event) {
      var x = event.target.body.scrollTop;
      if(x > 400) {
        $scope.setMenuActive(true);
      }else{
        $scope.setMenuActive(false);
      }
    });
    
    // Tipos de serviços
    $scope.services = [
      {
        name:'Web/cloud',
        icon:'ion-ios-cloud-outline',
        desc:'Controle sua empresa da sua casa, essa e outras '
      },
      {
        icon:'ion-iphone',
        name:'Aplicativos on demand',
        desc:'Nossa equipe é especialista em aplicações Android e iOS, Conte sua idéia, será um prazer expandir sua marca para a era Mobile'
      },
      {
        icon:'ion-ios-loop-strong',
        name:'Integrações',
        desc:'Integração entre diversos sistemas'
      }
    ];
})