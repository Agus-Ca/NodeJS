import { getAge, getAge2 } from "../../src/plugins";

describe('plugins/get-age.plugins.ts', () => {

    test('getAge() should return the age of a person', () => {
        const birthdate = '1997-05-30';
        const age = getAge(birthdate);

        expect( typeof age ).toBe( 'number' );
    });

    test('getAge() should return current age', () => {
        const birthdate = '1997-05-30';
        const age = getAge(birthdate);

        expect( typeof age ).toBe( 'number' );
    });

    test('getAge() shoud return 0 age', () => {
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
        const birthdate = '1997-05-30';
        const age = getAge2( birthdate );
        expect( age ).toBe ( 0 );
        expect( spy ).toHaveBeenCalled();
    });

});