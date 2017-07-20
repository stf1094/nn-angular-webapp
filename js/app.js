// Default colors
var brandPrimary =  '#5c777d';
var brandSuccess =  '#afd274';
var brandInfo =     '#5c777d';
var brandWarning =  '#f2aa5c';
var brandDanger =   '#f05e68';

var grayDark =      '#2a2c36';
var gray =          '#55595c';
var grayLight =     '#818a91';
var grayLighter =   '#d1d4d7';
var grayLightest =  '#f8f9fa';

angular
.module('app', [
  'ui.router',
  'oc.lazyLoad',
  'pascalprecht.translate',
  'ncy-angular-breadcrumb',
  'angular-loading-bar',
  'ngSanitize',
  'ngAnimate'
])
.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
  cfpLoadingBarProvider.latencyThreshold = 1;
}])
.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
  $rootScope.$on('$stateChangeSuccess',function(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
  $rootScope.$state = $state;
  return $rootScope.$stateParams = $stateParams;
}]);

 /* ---------- Accordian feature in downline tables ---------- 

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

var acc = document.getElementsByClassName("accordion-body");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
} */

/*Accordion with jquery*/

function toggleAccordion() {
 $('.accordion-body').hide();
 $('.accordion').on('click', function(){
   $(this).next().slideToggle(400);
   $(this).toggleClass('active');
 });
}
$(document).ready(toggleAccordion);
