import { emailTemplate } from "../../src/js-foundation/01-template"

describe('js-foundation/01-template.ts', () => {

    test('emailTemplate should contain a greeting',  () => {
        expect( emailTemplate ).toContain('Hi, ');
    })

    test('emailTemplate should contain {{name}}',  () => {
        expect( emailTemplate ).toContain('{{name}}');
    })

    test('emailTemplate should contain {{orderId}}',  () => {
        expect( emailTemplate ).toContain('{{orderId}}');
    })

})