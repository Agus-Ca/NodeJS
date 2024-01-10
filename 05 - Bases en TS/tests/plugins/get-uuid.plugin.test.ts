import { getUUID } from "../../src/plugins";

describe('plugins/get-uuid.plugin.ts', () => {

    test('getUUID() should return an UUID', () => {
        const uuid = getUUID();

        expect( typeof uuid ).toBe( 'string' );
        expect( uuid.length ).toBe( 36 );
    });

});