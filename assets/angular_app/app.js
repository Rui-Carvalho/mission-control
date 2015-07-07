angular.module('mcApp', [
    'ngRoute', 
    'ngResource', 
    'ui.bootstrap' 

    //App Specific Modules
	'mcApp.core',
    'mcApp.home',
    'mcApp.quickLinks',
    'mcApp.sideMenu'
])
.config(
	function($routeProvider) {
        $routeProvider.when("/quick-links", {
            controller: "quickLinksController",
            templateUrl: "/views/ng-views/quick-links.ejs"
        });
        $routeProvider.otherwise({ redirectTo: "/" });
	}
)
.run(
	function(){
		
	}
)
;
