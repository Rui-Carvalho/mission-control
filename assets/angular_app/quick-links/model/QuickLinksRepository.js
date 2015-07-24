angular.module('mcApp.QuickLinks')
    .factory('QuickLinksRepository', function ($resource, CacheService) {
        'use strict';

        var cacheFactory = CacheService.shortCache('CareerCache');

        return $resource('/xhr/careers/:categories',
            {
                categories: '@categories'
            },
            {
                getAll: {
                    method: 'GET',
                    cache: cacheFactory
                }
            }
        );
    }
);
