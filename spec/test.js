describe('EventController', function() {
    beforeEach(module('af'));

    var $controller;

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    describe('$scope.getDetails'), function() {
        it('sets ev.event to the the object at that index', function() {
            var $scope = {};
            var $controller = $controller('EventController', { $scope: $scope});
            $scope.events = [
                {
                    "name": "testi1",
                    "time": "123",
                    "place": "mettä"
                },
                {
                    "name": "testi2",
                    "time": "132",
                    "place": "kallio"
                }
            ];

            $scope.getDetails(0);
            expect(ev.event.name).toEqual('testi1');
            expect(ev.event.time).toEqual('123');
            expect(ev.event.place).toEqual('mettä');

            $scope.getDetails(1);
            expect(ev.event.name).toEqual('testi2');
            expect(ev.event.time).toEqual('132');
            expect(ev.event.place).toEqual('kallio');
            });
        };
});
