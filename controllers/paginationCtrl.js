(function (pagMod) {
    'use strict';
    pagMod.controller('pagingList', ["$scope", function ($scope) {


        $scope.totalItems = parseInt($scope.totalItems);
        $scope.totalbuttons;
        $scope.totalItemsPerpage = parseInt($scope.totalItemsPerpage);

        if (angular.isDefined($scope.totalItems) && $scope.totalItems < $scope.totalItemsPerpage) {
            $scope.totalItemsPerpage = $scope.totalItems;
        }
        $scope.show = true;
        $scope.totalbuttons = $scope.totalItems / $scope.totalItemsPerpage;
        if (($scope.showIfOnePage == "false" || $scope.showIfOnePage == "0") && $scope.totalbuttons <= 1)
            $scope.show = false;
        if ($scope.totalbuttons < $scope.currentPage.pageNumber)
            $scope.currentPage = {
                isActive: true,
                pageNumber: 1
            }
        $scope.first = function () {
            var page = {
                pageNumber: 1,
                isActive: true
            };
            doLogic(page);
        };
        $scope.previous = function () {
            var page = {
                pageNumber: $scope.currentPage.pageNumber > 1 ? $scope.currentPage.pageNumber - 1 : 1,
                isActive: true
            };
            doLogic(page);
        };
        $scope.next = function () {
            var page = {
                pageNumber: $scope.currentPage.pageNumber < Math.ceil($scope.totalbuttons) ? $scope.currentPage.pageNumber + 1 : Math.ceil($scope.totalbuttons),
                isActive: true
            };
            doLogic(page);
        };
        $scope.last = function () {
            var page = {
                pageNumber: Math.ceil($scope.totalbuttons),
                isActive: true
            };
            doLogic(page);
        };
        $scope.setPage = function (page) {
            doLogic(page);
        };

        function doLogic(page) {
            loadPagination(page);
        }
        if (angular.isUndefined($scope.maxNumberOfButtons))
            $scope.maxNumberOfButtons = 9;
        else
            $scope.maxNumberOfButtons = parseInt($scope.maxNumberOfButtons);

        if ($scope.maxNumberOfButtons % 2 == 0)
            $scope.maxNumberOfButtons++;

        $scope.gift = Math.floor($scope.maxNumberOfButtons / 2);
        loadPagination($scope.currentPage);

        function loadPagination(page) {
            $scope.totalPages = [];
            if (($scope.totalbuttons + 1) > $scope.maxNumberOfButtons) {
                var inicial = page.pageNumber - $scope.gift;
                var final = page.pageNumber + $scope.gift;
                var inicialGift = inicial - 1;
                var finalGift = final - Math.ceil($scope.totalbuttons);
                if (inicialGift < 0) {
                    inicial = 1;
                    final = final - inicialGift;
                }
                if (finalGift > 0) {
                    final = Math.ceil($scope.totalbuttons);
                    inicial = inicial - finalGift;
                }
                for (var i = inicial;
                    (i < final + 1); i++) {
                    $scope.totalPages.push({
                        pageNumber: i,
                        isActive: i === 1
                    });
                }
            } else {
                for (var i = 1;
                    (i < $scope.totalbuttons + 1 && i < 10); i++) {
                    $scope.totalPages.push({
                        pageNumber: i,
                        isActive: i === 1
                    });
                }
            }
            // set clicked button as active
            $scope.totalPages.forEach(function (p) {
                if (p.pageNumber === page.pageNumber)
                    p.isActive = true;
                else {
                    p.isActive = false;
                }
                $scope.currentPage = page;
            });
        }
    }]);
})(pagMod);