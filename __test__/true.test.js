
import { isNull, isTrue, isFalse, isUndefined } from '../true.js';

describe('Test null results', () => {
    test('null', () => {
        expect(isNull()).toBeNull();
    });
});

describe('Test true results', () => {
    test('true', () => {
        expect(isTrue()).toBeTruthy();
    });
});

describe('Test false results', () => {
    test('false', () => {
        expect(isFalse()).toBeFalsy();
    });
});

describe('Test undefined results', () => {
    test('undefined', () => {
        expect(isUndefined()).toBeUndefined();
    });
});

describe('Test untrue results', () => {
    test('untrue', () => {
        expect(isFalse()).not.toBeTruthy();
    });
});