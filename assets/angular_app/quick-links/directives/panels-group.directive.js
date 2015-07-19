angular.module('mcApp.quickLinks')
    .directive('panelsGroup', function() {
        return {
            restrict : 'E',
            replace: true,
            templateUrl : 'angular_app/quick-links/views/panels-group.partial.view.html',
            scope : {
                panelList : "=panellist"
            },
            link : function(scope, element, attrs) {
                scope.panelList = [
                    {
                        name : 'nm',
                        title : 'tt',
                        text : 'tx',
                        linkhref : 'lh',
                        linktext : 'lt'
                    },
                    {
                        name : 'nm',
                        title : 'tt',
                        text : 'tx',
                        linkhref : 'lh',
                        linktext : 'lt'
                    }

                ];
            }
        };
    }
);
