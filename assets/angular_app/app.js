angular.module('mcApp', [
    'ngRoute', 
    'ngResource', 
    'ui.bootstrap',

    //App Specific Modules
	'mcApp.core',
    'mcApp.home',
    'mcApp.quickLinks',
    'mcApp.sideMenu'
])
.config(
	function($routeProvider) {
        $routeProvider
            .when("/quick-links", {
                controller: "quickLinksController",
                templateUrl: "angular_app/quick-links/views/ql.view.html"
            })
            .otherwise({ 
                redirectTo: "/" 
            });
	}
)
.run(
	function(){
		
	}
)
;
