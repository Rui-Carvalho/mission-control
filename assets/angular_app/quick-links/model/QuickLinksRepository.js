angular.module('mcApp.quickLinks')
    .factory('QuickLinksRepository', function ($q, $resource, panelListConstant) {
        'use strict';

        //var cacheFactory = CacheService.shortCache('QuickLinksCache');

        // Definition of Quick Links in a static way - future: get this from an API call interacting with MongoDB
        var staticPanelList = panelListConstant;

        // Function that returns a static Quick Links data inside a promise
        var getQuickLinksStatic = function() {
            var deferred = $q.defer();
            if(staticPanelList.constructor === Array){
                deferred.resolve(staticPanelList);
            } else {
                deferred.reject('No Quick Links available!');
            }
            return deferred.promise;
        }

        return { // return factory object
            getQuickLinks : getQuickLinksStatic
        };
    }
);
