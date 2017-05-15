(function(angular){
    'use strict';
    angular.module('hrListApp', [])
        .controller('HRListController', ['$scope', function($scope){
            $scope.itemList = [];
            
            $scope.addListItem = function(){
                // keeps controller independent of view and therefore easier to test
                if ($scope.newItem && $scope.newItem != "") {
                    var css = (($scope.itemList.length+1) % 3) === 0 ? 'red-item' : 'black-item';
                    $scope.itemList.push({name: $scope.newItem, css: css});
                }
                
            };
        }])
})(window.angular);
