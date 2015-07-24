angular.module('mcApp.quickLinks')
    .service('QuickLinksService', function (QuickLinkRepository) {

        self.getAll = function () {
            var promise = QuickLinkRepository.getAll()
                .$promise
                .then(
                function (res) {
                    return res;
                }
            );
            return promise;
        };

    }
);

