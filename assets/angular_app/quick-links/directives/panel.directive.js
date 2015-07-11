angular.module('mcApp.quickLinks')
    .directive('linkPanel', function() {
        return {
            restrict : 'E',
            replace: true,
            templateUrl : 'angular_app/quick-links/views/panel.partial.view.html',
            controllerAs : 'ctrl',
            scope : {
                name : '=',
                title : '=',
                text : '=',
                linkHref : '=',
                linkText : '='
            },
            link : function(scope, element, attrs) {
                scope.panel = {
                    badge : {
                        name : "Badge Name",
                        title : "Badge Title"
                    },
                    text : "Panel Text",
                    link : {
                        href : "link href",
                        text : "Link text"
                    }
                };
            },

        };
    }
);
