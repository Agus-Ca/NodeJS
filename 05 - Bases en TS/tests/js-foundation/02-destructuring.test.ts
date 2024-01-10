import { characters } from "../../src/js-foundation/02-destructuring";

describe('js-foundation/02-destructuring.ts', () => {

    test('characters should contain Flash', () => {
        expect( characters ).toContain('Flash');
    })

    test('characters should contain Superman', () => {
        expect( characters ).toContain('Superman');
    })

})