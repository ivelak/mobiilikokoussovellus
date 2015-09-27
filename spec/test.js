describe('EventController', function() {
    beforeEach(module('af'));

    var $controller;

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    describe('$scope.getDetails'), function() {
        it('sets ev.event to the the object at that index', function() {
            var $scope = {};
            var controller = $controller('EventController', { $scope: $scope});
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
            expect($scope.event.name).toEqual('testi1');
            expect($scope.event.time).toEqual('123');
            expect($scope.event.place).toEqual('mettä');

            $scope.getDetails(1);
            expect($scope.event.name).toEqual('testi2');
            expect($scope.event.time).toEqual('132');
            expect($scope.event.place).toEqual('kallio');
            });
        };
});
