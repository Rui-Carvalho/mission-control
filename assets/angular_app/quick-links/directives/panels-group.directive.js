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
                        name : 'Jira',
                        title : 'Jira',
                        text : 'Project Management tool used in BoF Agile software development. Stories can be found in the backlog then selected for sprint backlogs.',
                        linkhref : 'https://d-labs.atlassian.net/login',
                        linktext : 'Jira Board'
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
