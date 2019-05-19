
import { getDataFromApi } from "../promise";

describe('Promise test', () => {

    const api = 'https://rickandmortyapi.com/api/character/';

    test('Making a request to an api', done => {

        getDataFromApi(api).then(data => {

            console.log(data);

            expect(data.results.length).toBeGreaterThan(0);
            expect(data).toHaveProperty('results');

            done();
        });
    });


    test('Resolve hello', () => {
        return expect(Promise.resolve('Hello!')).resolves.toBe('Hello!');
    });

    test('Reject with an error', () => {
        return expect(Promise.reject('Error')).rejects.toBe('Error');
    });
});