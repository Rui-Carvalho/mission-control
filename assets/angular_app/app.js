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
                templateUrl: "templates/quick-links/quick-links.view.ejs"
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
