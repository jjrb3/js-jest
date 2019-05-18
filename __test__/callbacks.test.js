
import { callbackHell } from "../callbacks";

describe('Callback test', () => {

    test('Callback', done => {

        function otherCallBack(data) {
            expect(data).toBe('Hello people');
            done();
        }

        callbackHell(otherCallBack)
    });
});