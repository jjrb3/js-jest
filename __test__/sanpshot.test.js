
import { getCharacter } from "../snapshot";
import rick from '../rick.json';


describe('Test snapshot', () => {
    test('Snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    });

    test('It will always fail', () => {
        const user = {
            createAt: new Date(),
            id: Math.floor(Math.random() * 20)
        };

        expect(user).toMatchSnapshot();
    });

    test('Exeption', () => {
        const user = {
            id: Math.floor(Math.random() * 20),
            name: 'Jeremy Reyes B.'
        };

        expect(user).toMatchSnapshot({
            id: expect.any(Number)
        });
    });
});