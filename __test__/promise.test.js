
import { getDataFromApi } from "../promise";

describe('Promise test', () => {
    test('Making a request to an api', done => {

        const api = 'https://rickandmortyapi.com/api/character/';

        getDataFromApi(api).then(data => {

            console.log(data);

            expect(data.results.length).toBeGreaterThan(0);
            expect(data).toHaveProperty('results');

            done();
        });
    });
});