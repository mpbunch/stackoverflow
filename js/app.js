(function(){
    'use strict';
    angular.module('test',['ngRoute'])
//    .config(['socialProvider',function(socialProvider){
//        socialProvider.setLinkedInKey('78aa4ei4mxijfs');            
//    }])
    .controller('home',['$scope','$rootScope','$http','$sce',function($scope,$rootScope,$http,$sce){
        $http({
            'method':'get',
            'url': 'https://api.stackexchange.com/2.2/questions/unanswered?order=desc&sort=activity&tagged=linkedin&site=stackoverflow&filter=!gB66oJcqu.XXtGy_qXMDVaTrgtDFsNcY0l)'
        }).then(function successCallback(response) {
            console.log(response.data.items);
            $scope.items = response.data.items;
        }, function errorCallback(response) {
            console.log(response);
        });
        $scope.trustAsHtml = $sce.trustAsHtml;
//        $rootScope.$on('event:social-sign-in-success', function(event, userDetails){
//            $scope.name = userDetails.name;
//            $scope.img  = userDetails.imageUrl;
//            $scope.email= userDetails.email;
//            $scope.$apply();
//        });
    }]);
})();