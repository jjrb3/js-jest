
import { add, substract, multiplication, division } from '../maths.js';


describe('Math calculations', () => {

    test('Add test', () => {
        expect(add(1,1)).toBe(2)
    });

    test('Add test', () => {
        expect(substract(1,1)).toBe(0)
    });

    test('Multiplication test', () => {
        expect(multiplication(2,2)).toBe(4)
    });

    test('Add test', () => {
        expect(division(4,2)).toBe(2)
    });
});