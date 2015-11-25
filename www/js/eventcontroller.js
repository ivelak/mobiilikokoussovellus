var app = angular.module('af', []);

app.controller('EventController', function EventController($scope, $http) {
    var ev = this;
    var url="http://localhost:8000/api/dev/";
    // var url="http://kokousbackendenv-env.elasticbeanstalk.com/api/dev/";
    
    $http.get(url+"events").success(function(res){
                 ev.events = res;
    //    $http.get("http://kokousbackendenv-env.elasticbeanstalk.com/api/dev/events").success(function(res){
    //             ev.events = res;
    });
    
    ev.selection = {
        
    }

    ev.getDetails = function(index) {
        ev.event = ev.events[index];
        
    }
    
    ev.getUsers=function(){
        
        var grid = ev.event.event.group.id;
        console.log(ev.events);
        $http.get(url+"group/"+grid).success(function(res){
            ev.users=res.users;
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
        console.log("getAct "+index);
        var activityInfo = ev.event.activities[index];
        $http.get(url+"activities/"+activityInfo.id).success(function(res){
           ev.activity=res; 
        //    $http.get("http://kokousbackendenv-env.elasticbeanstalk.com/api/dev/activities/"+activityInfo.id).success(function(res){
        //   ev.activity=res; 
            
            
        });
    }
    
    
 
});
