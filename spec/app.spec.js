describe('EventController test', function() {
    beforeEach(module('af'));

    var ctrl, scope, httpMock;

    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
        httpMock = $httpBackend;
        scope = $rootScope.$new();
        httpMock.when('GET', 'http://kokous-backend.herokuapp.com/api/dev/events').respond('[{"name":"testi1","time":"123","place":"mettä"},{"name":"testi2","time":"132","place":"kallio"}]');
        ctrl = $controller('EventController', {$scope: scope});

    }));

        it('sets ev.event to the the object at that index', function() {
            httpMock.expectGET('http://kokous-backend.herokuapp.com/api/dev/events');
            httpMock.flush();

            ctrl.getDetails(0);
            expect(ctrl.event.name).toEqual('testi1');
            expect(ctrl.event.time).toEqual('123');
            expect(ctrl.event.place).toEqual('mettä');

            ctrl.getDetails(1);
            expect(ctrl.event.name).toEqual('testi2');
            expect(ctrl.event.time).toEqual('132');
            expect(ctrl.event.place).toEqual('kallio');
            });
});
