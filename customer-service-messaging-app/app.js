var app = angular.module('csa', []);

app.controller('MessageController', ['$scope','$http', function($scope, $http) {

    $scope.countryList = [
        { name: 'Nigeria (+234)', value: '234' },
        { name: 'United Kingdom (+44)', value: '44' },
        { name: 'United States (+1)', value: '1' },
        { name: 'Brazil (+55)', value: '55' }
    ];

    $scope.sendMessage = function() {

        $scope.successMessage = false;
        $scope.errorMessage = false;

        var phoneNo = $scope.countryCode + $scope.mobile;
        var message = $scope.message;

        if ( $scope.mobile.charAt(0) === '0') {
            var phoneNo = $scope.countryCode + $scope.mobile.slice(1);
        }

        $http({
            method: 'GET',
            url: 'https://webtask.it.auth0.com/api/run/wt-ricardovsilva-msn_com-0/sms?phoneno=' + phoneNo + '&message=' + message
        }).then( function(response) {
            $scope.successMessage = true;
        }, function(err) {
            $scope.errorMessage = true; 
        });
    };

}]);