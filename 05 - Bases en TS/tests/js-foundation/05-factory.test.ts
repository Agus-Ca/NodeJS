import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe('js-foundation/05-factory.test.ts', () => {

    const getUUID = () => '1234';
    const getAge = () => 26;
    const makePerson = buildMakePerson({ getUUID, getAge });

    test('buildMakePerson should return a function', () => {
        expect(typeof makePerson).toBe('function');
    });

    test('makePerson should return a person', () => {
        const jhonDoe = makePerson({ name: 'Jhon Doe', birthdate: '1997-05-30' });

        expect(jhonDoe.id).toBe('1234');
        expect(jhonDoe.name).toBe('Jhon Doe');
        expect(jhonDoe.birthdate).toBe('1997-05-30');
        expect(jhonDoe.age).toBe(26);
    });

})