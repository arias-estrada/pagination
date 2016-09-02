(function (pagMod) {
    'use strict';
    pagMod.directive('pagingList', [function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/paginationTemplate.html',
            controller: 'pagingList',
            scope: {
                totalItems: "@",
                totalItemsPerpage: "@",
                currentPage: "=",
                maxNumberOfButtons: "@",
                showIfOnePage: "@"
            }
        };
    }]);
})(pagMod);