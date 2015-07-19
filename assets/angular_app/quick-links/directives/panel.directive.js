angular.module('mcApp.quickLinks')
    .directive('linkPanel', function() {
        return {
            restrict : 'E',
            replace: true,
            templateUrl : 'angular_app/quick-links/views/panel.partial.view.html',
            scope : {
                name : '@pnName',
                title : '@pnTitle',
                text : '@pnText',
                linkHref : '@pnLinkHref',
                linkText : '@pnLinkText'
            },
            link : function(scope, element, attrs) {
                scope.panel = {
                    name : scope.name,
                    title : scope.title,
                    text : scope.text,
                    linkhref : scope.linkHref,
                    linktext : scope.linkText
                };
                scope.customBackground = {
                   "background" : "url(img/jira_board.png) center top",
                   "background-size" : "cover"
                };
            }
        };
    }
);
