// After each test

afterEach(() => console.log('After each test'));
afterAll(() => console.log('After all test'));

// Before earch test
beforeAll(() => console.log('Before all test'));
beforeEach(() => console.log('Before each test'));


describe('Prepare to execute', () => {
    test('Is true', () => {
        expect(true).toBeTruthy();
    });
});