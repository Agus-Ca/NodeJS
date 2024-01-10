import { httpClient } from "../../src/plugins";

describe('plugins/http-client.plugin.ts',  () => {

    test('httpClient.get() should return a string', async () => {
        const data = await httpClient.get('https://jsonplaceholder.typicode.com/todos/1');
        expect( data ).toEqual({ userId: 1, id: 1, title: "delectus aut autem", completed: false});
    });

    test('httpClient should have a POST method', () => {
        const method = httpClient.post;
        expect( typeof method ).toBe( 'function' );
    });

    test('httpClient should have a PUT method', () => {
        const method = httpClient.put;
        expect( typeof method ).toBe( 'function' );
    });

    test('httpClient should have a DELETE method', () => {
        const method = httpClient.delete;
        expect( typeof method ).toBe( 'function' );
    });

});