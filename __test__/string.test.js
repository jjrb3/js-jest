
describe('Check string', () => {

    const text = 'A beautiful text';

    test('Contain the next text', () => {
        expect(text).toMatch(/beautiful/);
    });
    test('Not contain the next text', () => {
        expect(text).not.toMatch(/je/);
    });

    test('Check the text size', () => {
        expect(text).toHaveLength(16)
    });
});