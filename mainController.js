(function (app) {
    'use strict';
    app.controller("main", ["$scope", function ($scope) {
        $scope.$watch("model.currentPage", function (n, o) {
            console.log("new page " + n.pageNumber);
        }, true);
        $scope.show = true;
        $scope.refreshPaging = function () {
            $scope.show = !$scope.show;
        }
        $scope.model = {
            totalItems: "161",
            totalItemsPerpage: "800",
            currentPage: {
                pageNumber: 20
            },
            maxNumberOfButtons: "10",
            showIfOnePage: true
        }
    }]);
})(app);