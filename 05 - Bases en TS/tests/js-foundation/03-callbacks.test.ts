import { getUserById } from "../../src/js-foundation/03-callbacks";

describe('js-foundation/03-callbacks.ts', () => {

    test('getUserById should return an error if user does not exist', ( done ) => {
        const id = 10;
        getUserById( id, ( err, user ) => {
            expect( user ).toBeUndefined();
            expect( err ).toBe(`USUARIO no encontrado ${id}`);
            
            done();
        });
    })

    test('getUserById should return Jhon Doe', ( done ) => {
        const id = 1;
        getUserById( id, ( err, user ) => {
            expect( user!.id ).toBe(1);
            expect( user!.name ).toBe('Jhon Doe');

            expect( err ).toBeUndefined();

            done();
        });
    })

})