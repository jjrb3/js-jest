
import { numbers } from '../numbers.js';

describe('Comparison of numbers', () => {

    test('Greater than', () => {
        expect(numbers(2,2)).toBeGreaterThan(3);
    });

    test('Greater than or equals', () => {
       expect(numbers(2,2)).toBeGreaterThanOrEqual(4);
    });

    test('Less than', () => {
       expect(numbers(2,2)).toBeLessThan(10);
    });

    test('Less than or equal', () => {
       expect(numbers(2,2)).toBeLessThanOrEqual(4);
    });

    test('Float numbers', () => {
       expect(numbers(0.2,0.2)).toBeCloseTo(0.4);
    });
});