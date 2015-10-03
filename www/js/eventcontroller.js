var app = angular.module('af', []);

app.controller('EventController', function EventController($scope, $http) {
    var ev = this;
    ev.firstName= "John";
    ev.lastName= "Doe";
    $http.get("http://kokous-backend.herokuapp.com/api/dev/events").success(function(res){
                 ev.events = res;
    });

    ev.getDetails = function(index) {
        ev.event = ev.events[index];
    }
});
