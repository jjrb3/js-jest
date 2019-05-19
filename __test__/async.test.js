
import { getDataFromApi } from "../promise";


describe('Async/Await test', () => {

    test('Making a request to an API', async () => {

        const api     = 'https://rickandmortyapi.com/api/character/';
        const getRick = 'https://rickandmortyapi.com/api/character/1';

        await getDataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0);
        });


        await getDataFromApi(getRick).then(data => {
            expect(data.name).toEqual('Rick Sanchez');
        });


        // Another way
        const data = await getDataFromApi(api);
        expect(data.results.length).toBeGreaterThanOrEqual(0);

        const data2 = await getDataFromApi(getRick);
        expect(data2.name).toEqual('Rick Sanchez');
    });

    test('Making a request to an APi with error', async () => {

        const apiError = 'http://httpstat.us/404';
        const request  = getDataFromApi(apiError);

        await expect(request).rejects.toEqual(Error('Request failed with status 404'));
    });

    test('Resolve a hello', async () => {
        await expect(Promise.resolve('Hello')).resolves.toBe('Hello');
        await expect(Promise.reject('Error')).rejects.toBe('Error');
    });
});