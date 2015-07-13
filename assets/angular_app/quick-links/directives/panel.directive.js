angular.module('mcApp.quickLinks')
    .directive('linkPanel', function() {
        return {
            restrict : 'E',
            replace: true,
            templateUrl : 'angular_app/quick-links/views/panel.partial.view.html',
            controllerAs : 'ctrl',
            scope : {
                name : '@pnName',
                title : '@pnTitle',
                text : '@pnText',
                linkHref : '@pnLinkHref',
                linkText : '@pnLinkText'
            },
            link : function(scope, element, attrs) {
                scope.panel = {
                    badge : {
                        name : scope.name,
                        title : scope.title
                    },
                    text : scope.text,
                    link : {
                        href : scope.linkHref,
                        text : scope.linkText
                    }
                };
                scope.customBackground = {
                   "background" : "url(img/jira_board.png) center top",
                   "background-size" : "cover"
                };
            }
        };
    }
);
