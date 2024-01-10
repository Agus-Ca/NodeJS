import { buildLogger } from "../../src/plugins";

describe('plugins/logger.pluin.ts', () => {

    test('buildLogger should return a function', () => {
        const logger = buildLogger('test');

        expect( typeof logger.log ).toBe( 'function' );
        expect( typeof logger.error ).toBe( 'function' );
    });

});