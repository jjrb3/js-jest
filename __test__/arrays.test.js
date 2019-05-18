
import { arrayFruits, arrayColors } from "../arrays";


describe('Exist element', () => {

    test('Contain a banana?', () => {
        expect(arrayFruits()).toContain('Banana');
    });

    test('Contain a red?', () => {
        expect(arrayColors()).not.toContain('Yellow');
    });


    test('Check size of an arrangement', () => {
        expect(arrayFruits()).toHaveLength(4);
    });
});