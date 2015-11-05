describe('Tests for eventOccurrences', function() {
    beforeEach(module('af'));

    var ctrl, scope, httpMock;

    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
        httpMock = $httpBackend;
        scope = $rootScope.$new();
        httpMock.when('GET', 'http://localhost:8000/api/dev/events').respond('[{"id":"1","created_at":"2015-11-05 15:56:43","updated_at":"2015-11-05 15:56:43","cancelled":"0","date":{"date":"2015-12-12 15:56:43.000000","timezone_type":3,"timezone":"Europe\/Helsinki"},"time":{"date":"-0001-11-30 12:12:00.000000","timezone_type":3,"timezone":"Europe\/Helsinki"},"place":"Onkalo","notes":null,"event_id":"1","activities":[],"event":{"name":"Hippa","id":"1","time":"2015-12-12 12:12:00","endDate":"2015-12-12 15:56:43","place":"Onkalo","description":"","created_at":"2015-11-05 15:56:43","updated_at":"2015-11-05 15:56:43","group_id":"1"}}]');
        ctrl = $controller('EventController', {$scope: scope});

    }));

        it('sets ev.event to the the object at that index', function() {
            httpMock.expectGET('http://localhost:8000/api/dev/events');
            httpMock.flush();

            ctrl.getDetails(0);
            expect(ctrl.event.event.name).toEqual('Hippa');
            expect(ctrl.event.event.time).toEqual('2015-12-12 12:12:00');
            expect(ctrl.event.event.place).toEqual('Onkalo');
            });
});

describe('Tests for activities', function() {
        beforeEach(module('af'));

    var ctrl, scope, httpMock;

    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
        httpMock = $httpBackend;
        scope = $rootScope.$new();
        httpMock.when('GET', 'http://localhost:8000/api/dev/activities/0').respond('[{"id":"1","guid":"34c20bb4c990ed73bba8b7e1f15df76e","name":"Ruoka haltuun","age_group":"samoajat","created_at":"2015-11-05 15:55:49","updated_at":"2015-11-05 15:55:49"}]');
        ctrl = $controller('EventController', {$scope: scope});
        
    }));
    it('sets ev.activities to the the object at that index', function() {
        ev.getActivity(0);
        httpMock.expectGET('http://localhost:8000/api/dev/activities/0');
            httpMock.flush();

            ctrl.getDetails(0);
            expect(ctrl.activity.name).toEqual('Ruoka haltuun');
            expect(ctrl.activity.age_group).toEqual('samoajat');
            expect(ctrl.activity.created_at).toEqual('2015-11-05 15:55:49');
            });
    });
