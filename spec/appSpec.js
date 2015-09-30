require('angular-mocks');
describe('EventController test', function() {
    beforeEach(angular.mock.module('af'));

    var ctrl, scope, httpMock;

    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
        httpMock = $httpBackend;

        scope = $rootScope.$new();
        httpMock.when('GET', 'http://kokous-backend.herokuapp.com/api/dev/events').respond('[{"name":"testi1","time":"123","place":"mettä"},{"name":"testi2","time":"132","place":"kallio"}]');
        ctrl = $controller;
        ctrl(EventController, {
            $scope: scope
        });

    }));

        it('sets ev.event to the the object at that index', function() {
            httpMock.expectGET('http://kokous-backend.herokuapp.com/api/dev/events');
            httpMock.flush();

            scope.getDetails(0);
            expect($scope.event.name).toEqual('testi1');
            expect($scope.event.time).toEqual('123');
            expect($scope.event.place).toEqual('mettä');

            scope.getDetails(1);
            expect($scope.event.name).toEqual('testi2');
            expect($scope.event.time).toEqual('132');
            expect($scope.event.place).toEqual('kallio');
            });
});
