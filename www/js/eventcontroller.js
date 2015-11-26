var app = angular.module('af', []);

app.controller('EventController', function EventController($scope, $http) {
    var ev = this;
    $http.get("http://kokousbackendenv-env.elasticbeanstalk.com/api/dev/events").success(function(res){
                 ev.events = res;
    });
    ev.getDetails = function(index) {
        ev.event = ev.events[index];
        
    }
    ev.getUserActivities = function() {
        $http.get("http://kokousbackendenv-env.elasticbeanstalk.com/api/dev/activities").success(function(res) {
                    ev.userActivities = res;
        });
    }
    ev.getBadge = function(index) {
        var activityInfo = ev.userActivities[index];
        $http.get("http://kokousbackendenv-env.elasticbeanstalk.com/api/dev/activities/"+activityInfo.id).success(function(res){
           ev.badge=res; 
        });
    }
    ev.getDateTime = function(occ) {
        var time=new Date(occ.time.date);
        var date=new Date(occ.date.date);
        
        var timedate="";
        timedate= date.toLocaleDateString() + " " + time.toLocaleTimeString();        //.substr(time.length-9, time.length-5);
        
        return timedate;
    }
    
    ev.concat=function(string1, string2){
        return string1+" "+string2;
    }
    ev.getActivity=function(index) {
        var activityInfo = ev.event.activities[index];
        $http.get("http://kokousbackendenv-env.elasticbeanstalk.com/api/dev/activities/"+activityInfo.id).success(function(res){
           ev.activity=res; 
        });
    }
    
 
});
