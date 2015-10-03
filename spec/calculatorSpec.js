require('../www/js/calculator.js');

describe('calculator', function() {
    it('adds two numbers together', function() {
            expect(Add(1,2)).toEqual(3);
            expect(Add(2,5)).toEqual(7);
    });
});
