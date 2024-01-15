import { ServerApp } from "./presentation/server-app";

describe('Test App.ts', () => {

    test('should call Server.run with values', async() => {
        const serverAppRunMock = jest.fn();
        ServerApp.run = serverAppRunMock;
        process.argv = ['node', 'app.ts', '-b', '10', '-l', '5', '-s', '-d', 'custom-directory', '-n', 'custom-name'];

        await import('./app')

        expect( serverAppRunMock ).toHaveBeenCalled();
        expect( serverAppRunMock ).toHaveBeenCalledWith(expect.objectContaining({
            base: 10,
            limit: 5,
            displayTable: true,
            fileDestinationPath: 'custom-directory',
            fileName: 'custom-name'
        }));
    });

});