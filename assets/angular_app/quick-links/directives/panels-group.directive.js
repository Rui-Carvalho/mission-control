angular.module('mcApp.quickLinks')
    .directive('panelsGroup', function(QuickLinksService) {
        return {
            restrict : 'E',
            replace: true,
            templateUrl : 'angular_app/quick-links/views/panels-group.partial.view.html',
            scope : {
                panelList : "=panellist"
            },
            link : function(scope, element, attrs) {
               QuickLinksService.getQuickLinks()
                   .then(function(data) {
                       scope.panelList = data;
                   }); 
            }
        };
    }
);
