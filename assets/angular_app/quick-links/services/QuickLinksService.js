angular.module('mcApp.quickLinks')
    .factory('QuickLinksService', function ($q, QuickLinksRepository) {

        var getQuickLinks = function () {
            var deferred = $q.defer();
            QuickLinksRepository.getQuickLinks() 
                .then(
                    function (data) {
                        deferred.resolve(data);
                    }
                );
            return deferred.promise;
        };

        return { // return factory object
            getQuickLinks : getQuickLinks
        };

    }
);
