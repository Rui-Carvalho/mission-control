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
	function() {

	}
)
.run(
	function(){
		
	}
)
;
