angular.module('framework')
    .service('CacheService',
    function ($log, DSCacheFactory) {
        'use strict';

        function Factory() {
            this.shortCache = function (model) {
                return this.buildCache(model, 5, 8);
            };

            this.volativeCache = function (model) {
                return this.buildCache(model, 1, 5);
            };

            this.buildCache = function (model, mins, capacity) {
                var factory = DSCacheFactory;
                return factory(model, {
                    maxAge: 1000 * 60 * 5,
                    cacheFlushInterval: 1000 * 60 * 60,
                    deleteOnExpire: 'aggressive',
                    storageMode: 'localStorage',
                    capacity: capacity
                });
            };

            this.destroy = function (model) {
               var cache =  DSCacheFactory.get(model);
                cache.destroy();
            };
        }

        return new Factory();

});
